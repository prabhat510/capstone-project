import { Component, OnInit } from '@angular/core';
import { FeedbackServiceService } from '../services/feedback-service.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  // visibility of form2 and form3
  form2: Boolean = true
  form3: Boolean = true

  res1: any = ''
  res2: any = []
  res3: any = ''

  constructor(private feedbackservice: FeedbackServiceService) { }

  ngOnInit(): void {
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
      issues: this.res2, feedback: this.res3
    }).subscribe(data => console.log(data)
    )
  }
}
