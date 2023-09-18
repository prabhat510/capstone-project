import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { getServiceUrl } from '../urls';
import { Router } from '@angular/router';
import { TokenStorageServiceService } from '../services/token-storage-service.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Output() logOutInitialted = new EventEmitter();
  showMenu = false;
  isAdmin = false;
  username: any = '';
  isLoggedIn = false;
  userData:any;
  constructor(private authservice: AuthService, private router: Router, private tokenService: TokenStorageServiceService) { }

  ngOnInit(): void {
    this.authservice.authStatusSubject$.subscribe((res)=> {
      if(res.value === 'logout') {
          this.signOut();
      } else if(res.value === 'cancel') {
      } else {
        this.isLoggedIn = this.authservice.isLoggedIn;
        this.userData = res.value;
        this.isAdmin = this.userData.isAdmin;
        console.log('user details emitted', res);
      }
    })
  }
  signOut() {
    this.isLoggedIn = false;
    const data = {
      token: this.tokenService.getToken('refresh_token')
    }
    this.authservice.logoutUser(`${getServiceUrl().authServiceAPI}/auth/logout`, data).subscribe();
    setTimeout(() => {
    this.router.navigate(['/login']);
    }, 1000);
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
}
