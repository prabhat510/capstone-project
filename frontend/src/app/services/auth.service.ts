import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Cookie } from 'ng2-cookies';
import { TokenStorageServiceService } from './token-storage-service.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authStatusSubject = new Subject<any>();
  authStatusSubject$ = this.authStatusSubject.asObservable();

  constructor(private httpclient: HttpClient, private tokenService: TokenStorageServiceService) { }

  emitLogout() {
    this.authStatusSubject.next({type: 'auth', value: 'logout'});
  }

  emitCancelLogout() {
    this.authStatusSubject.next({type: 'auth', value: 'cancel'});
  }

  emitUserLoggedIn(userData: any) {
    this.authStatusSubject.next({type: 'userData', value: userData});
  }

  registerUser(url: string, user: object) {
    return this.httpclient.post(url, user)
  }

  loginUser(url: string, user: object) {
    return this.httpclient.post(url, user);
  }

  public get loggedIn() {
    // when the token is set user is logged in 
    return Cookie.get('token') ? true : false;
  }

  getNewAccessToken(url: string, data: object) {
    return this.httpclient.post(url, data);
  }

  logoutUser(url: string, data: object) {
    this.tokenService.removeToken('token');
    this.tokenService.removeToken('refresh_token');
    localStorage.clear();
    // always subscribe to the observables, if they are not subscribed request is not send to the server
    return this.httpclient.delete(url, data);
  }
}
