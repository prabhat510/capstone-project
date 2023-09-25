import { Component, OnInit, EventEmitter, Output, ElementRef, Renderer2 } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { getServiceUrl } from '../urls';
import { Router } from '@angular/router';
import { TokenStorageServiceService } from '../services/token-storage-service.service';
import { TokenInterceptorService } from '../services/token-interceptor.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Output() logOutInitialted = new EventEmitter();
  showMenu = false;
  isAdmin = false;
  isLoggedIn = false;
  userData:any;
  constructor(private authservice: AuthService, private router: Router, private tokenService: TokenStorageServiceService,
    private interceptorService: TokenInterceptorService, private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.isLoggedIn = this.authservice.loggedIn;
    this.userData = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')): '';
    this.interceptorService.accessTokenSubject.subscribe(res => {
      if(res === null) {
        console.log('access token has expired');
        // this.isLoggedIn = false;
      } else {
        console.log('new access token is recieved and window is reloaded');
        this.isLoggedIn = true;
        const userDetails = this.tokenService.getToken('userData');
        this.userData = JSON.parse(userDetails);
        window.location.reload();
      }
    })
    this.authservice.authStatusSubject$.subscribe((res)=> {
      if(res.value === 'logout') {
          this.signOut();
      } else if(res.value === 'cancel') {
        console.log('cancelled');
      } else {
        this.isLoggedIn = this.authservice.loggedIn;
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

  logoutUser() {
    const body = this.elementRef.nativeElement.ownerDocument.body;
    this.renderer.setStyle(body, 'overflow', 'hidden');
    this.logOutInitialted.emit();
    this.toggleMenu()
  }
}
