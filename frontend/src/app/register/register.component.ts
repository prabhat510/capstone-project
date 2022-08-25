import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  errorMessage: string;
  name: string = ''
  username: string = ''
  email: string = ''
  password: string = ''
  isAdmin: Boolean = false

  constructor(private authservice: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  toggleValue() {
    this.isAdmin = !this.isAdmin
  }
  createUser() {
    const user = { name: this.name, username: this.username, email: this.email, password: this.password, isAdmin: this.isAdmin }
    this.authservice.registerUser('http://localhost:3000/auth/register/user', user).subscribe(data => console.log(data)
    )
    this.router.navigate(['/login'])
  }

}
