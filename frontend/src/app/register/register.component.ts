import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  errorMessage: string;

  userModel = new User('', '', '', '', false)
  constructor(private authservice: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  createUser() {
    console.log(this.userModel);
    this.authservice.registerUser('https://getbookinfo.herokuapp.com/auth/register/user', this.userModel).subscribe(response => {
      if (response.error) {
        this.errorMessage = response.error;
      } else {
        this.router.navigate(['/login'])
      }
    }

    )

  }

}
