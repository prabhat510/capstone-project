import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-display-users',
  templateUrl: './display-users.component.html',
  styleUrls: ['./display-users.component.css']
})
export class DisplayUsersComponent implements OnInit {
  isLoading: Boolean;
  users: any;
  constructor(private authservice: AuthService) { }

  ngOnInit(): void {
    this.isLoading = true
    this.authservice.fetchUsers('https://getbookinfo.herokuapp.com/auth/users').subscribe(res => { this.users = res.users; this.isLoading = false }
    )
  }

}
