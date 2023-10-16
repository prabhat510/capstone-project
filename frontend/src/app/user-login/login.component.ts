import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { getServiceUrl } from '../urls';
import { TokenStorageServiceService } from '../services/token-storage-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements AfterViewInit {

  @ViewChild('usrname') usrname: ElementRef;
  @ViewChild('passwrd') passwrd: ElementRef;
  errorMessage: string = '';
  login_form = {
    username: '',
    password: ''
  };
  showLoader = false;
  constructor(private authservice: AuthService, private router: Router, private tokenService: TokenStorageServiceService) { }

  ngAfterViewInit(): void {
    this.usrname.nativeElement.focus();
  }
  signinUser(usrForm: NgForm) {
    this.showLoader = true;
    if (usrForm.valid) {
      this.authservice.loginUser(this.login_form)
      .subscribe({
        next: data => this.proccessUserData(data), 
        error: error=> {
          if(error.status === 404) {
            this.errorMessage = 'Please check your credentials!';
            this.showLoader = false;
          }
        }
      });
    } else {
      usrForm.control.markAllAsTouched();
      this.errorMessage = "Please fill all the fields";
      this.checkInvalidForm();
      this.showLoader = false;
    }

  }
  proccessUserData(data: any) {
    // when credentials are correct
    if (data) {
      const redirectTo = this.authservice.getCurrentRoute();
      localStorage.setItem('userData', JSON.stringify(data.user));
      this.authservice.setUserData(data);
      this.authservice.emitUserLoggedIn(data.user);
      if(redirectTo!==null) {
        this.router.navigate(['/' + redirectTo]);
      } else {
        this.router.navigate(['']);
      }
    } 
    this.showLoader = false;
  }

  checkInvalidForm() {
    if (!this.login_form.username) {
      this.usrname.nativeElement.focus();
    } else if (!this.login_form.password) {
      this.passwrd.nativeElement.focus();
    }
  }
}
