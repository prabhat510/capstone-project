import { Component, OnInit } from '@angular/core';
import { FeedbackServiceService } from '../services/feedback-service.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-display-feedbacks',
  templateUrl: './display-feedbacks.component.html',
  styleUrls: ['./display-feedbacks.component.css']
})
export class DisplayFeedbacksComponent implements OnInit {

  constructor(private titleservice:Title, private feedbackservice: FeedbackServiceService) { }
  isLoading: boolean;
  feedbacks: any = []
  ngOnInit(): void {
    this.titleservice.setTitle('user feedbacks');
    this.isLoading = true
    this.feedbackservice.getFeedbacks('http://localhost:3000/feedbacks/display').subscribe(data => {
      this.feedbacks = data;
      this.isLoading = false;
    })

  }

}
