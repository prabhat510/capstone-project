import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { AuthService } from './auth.service';
import { BehaviorSubject, catchError, switchMap, throwError } from 'rxjs';
import { getServiceUrl } from '../urls';
import { TokenStorageServiceService } from './token-storage-service.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  public accessTokenSubject = new BehaviorSubject<any>(null);
  constructor(private authservice: AuthService, private tokenService: TokenStorageServiceService, private router: Router) { }

  // intercept runs before request is sent out to the server and before the response is forwarded to subscribe
  // next() is called to continue the request flow
  // the request object is immutable, therefore you can only copy the existing request and in that add any headers
  // while adding headers, use append method so that the existing headers are retained in the request
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(this.addTokenHeader(req)).pipe(catchError(error => {
      if (error instanceof HttpErrorResponse && !req.url.includes('/auth/login') && !req.url.includes('/auth/logout')) {
        console.log('there is error', error);
        return this.handleErrorResponse(req, next);
      }
      return throwError(()=>new Error(error));
    }))
  }

  private handleErrorResponse(req: HttpRequest<any>, next: HttpHandler) {
    console.log('getting new access token..');
    // got 401 that means token has expired, emitting null value to the subscribers
    this.accessTokenSubject.next(null); 
    const refreshToken = this.tokenService.getToken('refresh_token');
    const url = getServiceUrl().authServiceAPI + '/auth/token';
    if (refreshToken) {
      return this.authservice.getNewAccessToken(url, { token: refreshToken }).pipe(
          switchMap((data: any) => {
            console.log('got new access token', data);
            this.tokenService.setToken('token', data.accessToken);
            // got the new accessToken sending it to the subscribers
            this.accessTokenSubject.next(data.accessToken);
            return next.handle(this.addTokenHeader(req));
          }),
          catchError((error) => {
            console.log('error fetching refresh token', error);
            return this.logoutUser(refreshToken);
          }
        ))
    } else {
      return this.logoutUser(refreshToken);
    }
  }

  private addTokenHeader(req: HttpRequest<any>) {
    if (req.url.includes('login') || req.url.includes('logout') || req.url.includes('register')) {
      return req;
    }
    return req.clone({
      headers: req.headers.append('Authorization', `Bearer ${this.tokenService.getToken('token')}`)
    });
  }

  private logoutUser(refreshToken: string) { 
    this.tokenService.deleteAllTokens();
    this.authservice.logoutUser(getServiceUrl().authServiceAPI, {token: refreshToken});
    this.router.navigate(['/']);
    return throwError(()=> new Error('session has expired'));
  }

}

// we can interact with response also in the interceptor by using handle(handle gives us an observable which is expected beacuse our
// request is also an observable) and adding certain methods like catchError to catch any error from the response. 