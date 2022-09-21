import { Component, OnInit } from '@angular/core';
import { FeedbackServiceService } from '../services/feedback-service.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { asLiteral } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-submit-feedback',
  templateUrl: './submit-feedback.component.html',
  styleUrls: ['./submit-feedback.component.css']
})
export class SubmitFeedbackComponent implements OnInit {

  isLoading:boolean;
  // visibility of form2 and form3
  form2: boolean = true;
  form3: boolean = true;

  res1: any = '';
  res2: any = [];
  res3: any = '';

  constructor(private titlesevice:Title, private router: Router, private feedbackservice: FeedbackServiceService) { }

  ngOnInit(): void {
    this.isLoading=true;
      this.titlesevice.setTitle('feedback');
      this.isLoading=false;
  }

  retrieveFirstResponse(value: string) {
    this.res1 = value;
    if (value === 'yes' || value === 'not sure') {
      this.form3 = false;
    } else if (value === 'no') {
      this.form2 = false;
    }
  }
  retrieveSecondResponse(value: any) {
    this.res2.push(value);
  }
  submitFeedback() {
    this.feedbackservice.addFeedback('http://localhost:3000/feedbacks/add/feedback', {
      liked: this.res1,
      issues: this.res2, feedback: this.res3,
      username: JSON.parse(localStorage.getItem('user')).username,
      date_added: new Date(Date.now())
    }).subscribe(data => console.log(data)
    )
    this.router.navigate(['']);
  }

}
