import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { TokenStorageServiceService } from './services/token-storage-service.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authservice: AuthService, private router: Router, private tokenService: TokenStorageServiceService
  ) { }
  // the route guard returns true or false, if the user is logged in it will return true otherwise will navigate it to login page
  canActivate(): boolean {
    if (this.authservice.isLoggedIn) {
      return true;
    } else {
      const payload = {token: this.tokenService.getToken('refresh_token')};
      this.authservice.getNewAccessToken(payload)
      .subscribe({
        next: res =>{ 
          this.authservice.setUserData(res);
          this.router.navigate(['']);
        },
        error: error => {
          console.log('error fetching new token', error);
          this.authservice.clearUserData();
          this.router.navigate(['/login']);
        }
      });
    }
  }
}
