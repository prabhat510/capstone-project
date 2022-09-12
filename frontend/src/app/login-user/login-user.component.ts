import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {
  
  isLoading: boolean;
  username: string = ''
  password: string = ''
  errorMessage: string = ''
  constructor(private titleservice:Title, private authservice: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.titleservice.setTitle('login');
    if (localStorage.getItem("token")) {
      this.router.navigate(['']);
    }
    this.isLoading=false;
  }

  signinUser() {
    const user = { username: this.username, password: this.password }
    console.log(user);
    this.authservice.loginUser('https://getbookinfo.herokuapp.com/auth/login/user', user).subscribe(data => this.isValidUser(data)
    )
  }
  isValidUser(data: any) {
    // when credentials are correct
    if (data.status === 200) {
      localStorage.setItem('token', data.token)
      console.log(data.user.username);
      localStorage.setItem('user', JSON.stringify(data.user));
      this.router.navigate(['']);
      window.location.reload()
    } else if (data.status === 404) {
      this.errorMessage = 'invalid user';
    } else {
      this.errorMessage = 'password is incorrect';
    }
  }
}
