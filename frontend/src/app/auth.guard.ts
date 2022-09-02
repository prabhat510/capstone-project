import { Injectable } from '@angular/core';
import {  CanActivate, Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authservice: AuthService, private router: Router
  ) { }
  // the route guard returns true or false, if the user is logged in it will return true otherwise will navigate it to login page
  canActivate(): boolean {
    if (this.authservice.loggedIn()) {
      return true
    } else {
      this.router.navigate(['/login'])
    }
  }
}
