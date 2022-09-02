import { Component } from '@angular/core';
import { FeedbackServiceService } from '../services/feedback-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {

  // visibility of form2 and form3
  form2: boolean = true
  form3: boolean = true

  res1: any = ''
  res2: any = []
  res3: any = ''

  constructor(private router: Router, private feedbackservice: FeedbackServiceService) { }

  retrieveFirstResponse(value: string) {
    this.res1 = value
    if (value === 'yes' || value === 'not sure') {
      this.form3 = false
    } else if (value === 'no') {
      this.form2 = false
    }
  }
  retrieveSecondResponse(value: any) {
    this.res2.push(value)
  }
  submitFeedback() {
    this.feedbackservice.addFeedback('https://getbookinfo.herokuapp.com/feedbacks/add/feedback', {
      liked: this.res1,
      issues: this.res2, feedback: this.res3,
      username: JSON.parse(localStorage.getItem('user')).username,
      date_added: new Date(Date.now())
    }).subscribe(data => console.log(data)
    )
    this.router.navigate([''])
  }

}
