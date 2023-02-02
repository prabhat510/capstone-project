import { Component, OnInit } from '@angular/core';
import { FeedbackServiceService } from '../services/feedback-service.service';

@Component({
  selector: 'app-feedbacks',
  templateUrl: './feedbacks.component.html',
  styleUrls: ['./feedbacks.component.css']
})
export class FeedbacksComponent implements OnInit {

  constructor(private feedbackservice: FeedbackServiceService) { }
  feedbacks: any = []
  ngOnInit(): void {
    this.feedbackservice.getFeedbacks('https://bookstore-backend-hv3g.onrender.com/feedbacks/display').subscribe(data => this.feedbacks = data)
  }

}
