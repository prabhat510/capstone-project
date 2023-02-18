import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpclient: HttpClient, private router: Router) { }
  registerUser(url: string, user: object) {
    return this.httpclient.post(url, user)
  }
  loginUser(url: string, user: object) {
    return this.httpclient.post(url, user)
  }
  loggedIn() {
    // when the token is set user is logged in 
    return !!localStorage.getItem('token')
  }
  // logoutUser() {
  //   localStorage.removeItem('token')
  //   this.router.navigate(['/login'])
  // }
  getToken() {
    return localStorage.getItem('token')
  }
  verifyToken(url: string) {
    return this.httpclient.get(url)
  }
}
