import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {

  @ViewChild('usrname') usrname: ElementRef;
  @ViewChild('passwrd') passwrd: ElementRef;
  errorMessage: string = '';
  login_form = {
    username: '',
    password: ''
  };
  constructor(private authservice: AuthService, private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem("token")) {
      this.router.navigate(['']);
    } else if (window.location.href === 'https://bookstore-backend-hv3g.onrender.com/login') {
      this.router.navigate(['/login']);
    }
  }
  ngAfterViewInit(): void {
    this.usrname.nativeElement.focus();
  }
  signinUser(usrForm: NgForm) {
    if (usrForm.valid) {
      this.authservice.loginUser('https://bookstore-backend-hv3g.onrender.com/auth/login/user', this.login_form).subscribe(data => this.isValidUser(data)
      );
    } else {
      usrForm.control.markAllAsTouched();
      this.errorMessage = "all fields are mandatory";
      this.checkInvalidForm();
    }

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
      console.log('invalid user called');

    } else {
      this.errorMessage = 'password is incorrect';
    }
  }

  checkInvalidForm() {
    if (!this.login_form.username) {
      this.usrname.nativeElement.focus();
    } else if (!this.login_form.password) {
      this.passwrd.nativeElement.focus();
    }
  }
}
