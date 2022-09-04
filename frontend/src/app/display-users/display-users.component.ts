import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-display-users',
  templateUrl: './display-users.component.html',
  styleUrls: ['./display-users.component.css']
})
export class DisplayUsersComponent implements OnInit {
  isLoading: boolean;
  users: any;
  constructor(private titleservice:Title, private authservice: AuthService) { }

  ngOnInit(): void {
    this.titleservice.setTitle('user list');
    this.isLoading = true
    this.authservice.fetchUsers('https://getbookinfo.herokuapp.com/auth/users').subscribe(res => { this.users = res.users; this.isLoading = false }
    )
  }

}
