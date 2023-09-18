import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Cookie } from 'ng2-cookies';
import { TokenStorageServiceService } from './token-storage-service.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAdmin = false;
  isLoggedIn = false;
  private authStatusSubject = new Subject<any>();
  authStatusSubject$ = this.authStatusSubject.asObservable();

  emitLogout() {
    this.authStatusSubject.next({type: 'auth', value: 'logout'});
  }

  emitCancelLogout() {
    this.authStatusSubject.next({type: 'auth', value: 'cancel'});
  }

  emitUserLoggedIn(userData: any) {
    this.isAdmin = userData.isAdmin;
    this.authStatusSubject.next({type: 'userData', value: userData});
  }

  constructor(private httpclient: HttpClient, private router: Router, private tokenService: TokenStorageServiceService) { }

  registerUser(url: string, user: object) {
    return this.httpclient.post(url, user)
  }

  loginUser(url: string, user: object) {
    return this.httpclient.post(url, user);
  }

  loggedIn() {
    // when the token is set user is logged in 
    return Cookie.get('token') ? true : false;
  }

  getNewAccessToken(url: string, data: object) {
    return this.httpclient.post(url, data);
  }

  logoutUser(url: string, data: object) {
    this.isAdmin = false;
    this.isLoggedIn = false;
    this.tokenService.removeToken('token');
    this.tokenService.removeToken('refresh_token');
    // always subscribe to the observables, if they are not subscribed request is not send to the server
    return this.httpclient.delete(url, data);
  }
}
