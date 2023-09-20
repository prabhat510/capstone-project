import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { AuthService } from './auth.service';
import { catchError, throwError } from 'rxjs';
import { getServiceUrl } from '../urls';
import { TokenStorageServiceService } from './token-storage-service.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private authservice: AuthService, private tokenService: TokenStorageServiceService) { }

  // intercept runs before request is sent out to the server and before the response is forwarded to subscribe
  // next() is called to continue the request flow
  // the request object is immutable, therefore you can only copy the existing request and in that add any headers
  // while adding headers, use append method so that the existing headers are retained in the request
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let modifiedReq = this.addTokenHeader(req);
    return next.handle(modifiedReq).pipe(catchError(error => {
      if (error instanceof HttpErrorResponse && !req.url.includes('/auth/login')) {
        console.log('there is error', error);
        
        return this.handleErrorResponse(req, next);
      }
    }))
  }

  private handleErrorResponse(req: HttpRequest<any>, next: HttpHandler) {
    console.log('handleErrorResponse called');
    const refreshToken = this.tokenService.getToken('refresh_token');
    const url = getServiceUrl().authServiceAPI + '/auth/token'
    if(refreshToken) {
      this.authservice.getNewAccessToken(url, { token: refreshToken })
      .subscribe({
        next: (data: any) => {
          console.log('new access token', data);
          this.tokenService.setToken('refresh_token', data.accessToken);

        },
        error: (error) => {
          console.log('error fetching refresh token');
          const url = getServiceUrl().authServiceAPI + '/auth/logout'
          this.authservice.logoutUser(url, { token: refreshToken });
          return throwError(error);
        }
      })
    }
    return next.handle(this.addTokenHeader(req));
  }

  private addTokenHeader(req: HttpRequest<any>) {
    if(req.url.includes('login') || req.url.includes('logout') || req.url.includes('register')) {
      return req;
    }
    return req.clone({
      headers: req.headers.append('Authorization', `Bearer ${this.tokenService.getToken('token')}`)
    });
  }
}

// we can interact with response also in the interceptor by using handle(handle gives us an observable which is expected beacuse our
// request is also an observable) and adding certain methods like catchError to catch any error from the response. 