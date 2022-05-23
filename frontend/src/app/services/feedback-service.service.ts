import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FeedbackServiceService {

  constructor(private httpclient: HttpClient) { }
  addFeedback(url: string, body: object) {
    return this.httpclient.post(url, body)
  }
  getFeedbacks(url: string) {
    return this.httpclient.get(url)
  }
  feedbackExists(url: string, body: object) {
    return this.httpclient.post(url, body)
  }
}
