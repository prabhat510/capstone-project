import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Cookie } from 'ng2-cookies';
import { TokenStorageServiceService } from './token-storage-service.service';
import { getServiceUrl } from '../urls';
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

  getAccessToken() {
    return this.tokenService.getToken('token');
  }

  getRefreshToken() {
    return this.tokenService.getToken('refresh_token');
  }

  getCurrentRoute() {
    return this.tokenService.getToken('route') || null;
  }

  public get isLoggedIn() {
    // when the token is set and it has not expired then user is logged in 
    const accessToken = Cookie.get('token');
    const expiry = localStorage.getItem('expiresIn');
    console.log('accessToken is', accessToken);
    if(expiry && accessToken) {
     if(expiry > new Date().toISOString()) {
      console.log('token is valid');
      return true;
     } 
    }
    console.log('token has expired');
    return false;
  }

  setUserData(data: any) {
    this.tokenService.setToken('token', data.accessToken);
    this.tokenService.setToken('refresh_token', data.refreshToken);
    localStorage.setItem('expiresIn', data.expiresIn);
  }

  clearUserData() {
    this.tokenService.deleteAllTokens();
    localStorage.clear();  
  }

  registerUser(user: object) {
    const url = `${getServiceUrl().bookServiceAPI}/auth/register/user`;
    return this.httpclient.post(url, user)
  }

  loginUser(user: object) {
    const url = `${getServiceUrl().authServiceAPI}/auth/login`;
    return this.httpclient.post(url, user);
  }

  getNewAccessToken(data: object) {
    const url = `${getServiceUrl().authServiceAPI}/auth/token`;
    return this.httpclient.post(url, data);
  }

  logoutUser(data: any) {  
    const url = `${getServiceUrl().authServiceAPI}/auth/logout`;
    this.clearUserData();
    // always subscribe to the observables, if they are not subscribed request is not send to the server
    return this.httpclient.delete(url, {body: data});
  }

}
