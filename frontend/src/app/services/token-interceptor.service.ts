import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private authservice: AuthService) { }

  intercept(req, next) {
    let tokenozedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.authservice.getToken()}`
      }
    })
    return next.handle(tokenozedReq)
  }

}
