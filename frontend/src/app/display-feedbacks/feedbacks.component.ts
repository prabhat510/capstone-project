import { Component, OnInit } from '@angular/core';
import { FeedbackServiceService } from '../services/feedback-service.service';
import { getServiceUrl } from '../urls';

@Component({
  selector: 'app-feedbacks',
  templateUrl: './feedbacks.component.html',
  styleUrls: ['./feedbacks.component.css']
})
export class FeedbacksComponent implements OnInit {

  constructor(private feedbackservice: FeedbackServiceService) { }
  feedbacks: any = []
  ngOnInit(): void {
    this.feedbackservice.getFeedbacks(`${getServiceUrl().bookServiceAPI}/feedbacks/display`).subscribe(data => this.feedbacks = data)
  }

}
