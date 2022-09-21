import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {


  errorMessage: string;

  userModel = new User('', '', '', '', false);
  constructor(private titleservice:Title, private authservice: AuthService, private router: Router) { }
  ngOnInit(): void {
      this.titleservice.setTitle('signup');
  }
  createUser() {
    this.authservice.registerUser('http://localhost:3000/auth/register/user', this.userModel).subscribe(response => {
      if (response.error) {
        this.errorMessage = response.error;
      } else {
        this.router.navigate(['/login'])
      }
    }

    )

  }

}
