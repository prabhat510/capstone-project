import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpclient: HttpClient, private router: Router) { }

  fetchUsers(url: string): Observable<any> {
    return this.httpclient.get(url)
  }

  registerUser(url: string, user: object): Observable<any> {
    return this.httpclient.post(url, user)
  }
  loginUser(url: string, user: object) {
    return this.httpclient.post(url, user)
  }
  loggedIn() {
    // when the token is set user is logged in 
    return !!localStorage.getItem('token')
  }
  logoutUser() {
    localStorage.removeItem('token')
    this.router.navigate(['/login'])
  }
  getToken() {
    return localStorage.getItem('token')
  }
  verifyToken(url: string) {
    return this.httpclient.get(url)
  }
}
