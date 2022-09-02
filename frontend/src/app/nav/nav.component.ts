import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FeedbackServiceService } from '../services/feedback-service.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  feedbackExists: boolean = false;
  isAdmin: boolean = false;
  username: any = '';
  constructor(private router: Router, private authservice: AuthService, private feedbackservice: FeedbackServiceService) {

  }
  isLoggedIn: boolean = false


  ngOnInit(): void {
    this.isLoggedIn = this.authservice.loggedIn()
    if (localStorage.getItem('user')) {
      this.username = JSON.parse(localStorage.getItem('user')).username
      this.isAdmin = JSON.parse(localStorage.getItem('user')).isAdmin

      // check if user has already given the feedback
      this.feedbackservice.feedbackExists('https://getbookinfo.herokuapp.com/feedbacks/user/feedback/exists', { username: JSON.parse(localStorage.getItem('user')).username }).subscribe(data => this.checkFeedbackExistsResponse(data))
    }
  }
  checkFeedbackExistsResponse(data: any) {
    if (data.exists) {
      this.feedbackExists = true;
    }
  }
  signOut() {
    this.authservice.logoutUser()
    this.isLoggedIn = false
    localStorage.removeItem('user')
  }
  handleFeedback() {
    if (this.feedbackExists) {
      alert('feedback already given')
    } else {
      this.router.navigate(['/feedback'])
    }
  }
  displayUsers() {
    this.router.navigate(['/users']);
  }

}
