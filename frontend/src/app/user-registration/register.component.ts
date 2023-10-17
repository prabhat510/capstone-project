import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { getServiceUrl } from '../urls';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, AfterViewInit {

  errorMessage: string = '';
  @ViewChild('_name') _name: ElementRef;
  @ViewChild('_username') _username: ElementRef;
  @ViewChild('_email') _email: ElementRef;
  @ViewChild('_password') _password: ElementRef;
  @ViewChild('_isAdmin') _isAdmin: ElementRef;

  registration_form = {
    name: '',
    username: '',
    email: '',
    password: '',
    isAdmin: false
  }
  showLoader = false;

  constructor(private authservice: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this._name.nativeElement.focus();
  }
  checkInvalidForm() {
    console.log('checkInvalidForm called ');
    if (!this.registration_form.name) {
      this._name.nativeElement.focus();
    } else if (!this.registration_form.username) {
      this._username.nativeElement.focus();
    } else if (!this.registration_form.email) {
      this._email.nativeElement.focus();
    } else if (!this.registration_form.password) {
      this._password.nativeElement.focus();
    } else if (!this.registration_form.isAdmin) {
      this._isAdmin.nativeElement.focus();
    }
  }
  toggleValue() {
    this.registration_form.isAdmin = !this.registration_form.isAdmin
  }
  validateUser(data: any) {
    if (data.status === 409) {
      this.errorMessage = data.message;
      this.showLoader = false;
    } else {
      this.router.navigate(['/login']);
    }
  }
  createUser(registration_form: NgForm) {
    this.showLoader = true;
    if (registration_form.valid) {
      this.authservice.registerUser(this.registration_form)
        .subscribe({
          next: (data) => {
            this.validateUser(data);
          },
          error: (error)=>{
            this.showLoader = false;
            this.errorMessage = "something went wrong!";
            console.log('error', error);
          }
        }
        )
    } else {
      registration_form.control.markAllAsTouched();
      this.errorMessage = "please fill all the fields";
      this.checkInvalidForm();
      this.showLoader = false;
    }
  }

}
