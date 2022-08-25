import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = ''
  password: string = ''
  errorMessage: string = ''
  constructor(private authservice: AuthService, private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem("token")) {
      this.router.navigate([''])
    }
  }
  signinUser() {
    const user = { username: this.username, password: this.password }
    console.log(user);
    this.authservice.loginUser('http://localhost:3000/auth/login/user', user).subscribe(data => this.isValidUser(data)
    )
    // this.router.navigate([''])
  }
  isValidUser(data: any) {
    // when credentials are correct
    if (data.status === 200) {
      localStorage.setItem('token', data.token)
      console.log(data.user.username);
      localStorage.setItem('user', JSON.stringify(data.user))
      this.router.navigate([''])
      window.location.reload()
    } else if (data.status === 404) {
      this.errorMessage = 'invalid user'
    } else {
      this.errorMessage = 'password is incorrect'
    }
  }
}
