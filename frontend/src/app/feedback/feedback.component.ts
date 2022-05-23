import { Component, OnInit } from '@angular/core';
import { FeedbackServiceService } from '../services/feedback-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  feedbackExists: any = ''

  // visibility of form2 and form3
  form2: Boolean = true
  form3: Boolean = true

  res1: any = ''
  res2: any = []
  res3: any = ''

  constructor(private router: Router, private feedbackservice: FeedbackServiceService) { }

  ngOnInit(): void {
    // check if user has already given the feedback
    this.feedbackservice.feedbackExists('http://localhost:3000/feedbacks/user/feedback/exists', { username: JSON.parse(localStorage.getItem('user')).username }).subscribe(data => console.log(data)
    )
    if (this.feedbackExists) {
      alert('you have already given the feedback')
      this.router.navigate([''])
    }
  }
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
    this.feedbackservice.addFeedback('http://localhost:3000/feedbacks/add/feedback', {
      liked: this.res1,
      issues: this.res2, feedback: this.res3,
      username: JSON.parse(localStorage.getItem('user')).username
    }).subscribe(data => console.log(data)
    )
    this.router.navigate([''])
  }
}
