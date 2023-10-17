import { Component, OnInit, EventEmitter, Output, ElementRef, Renderer2 } from '@angular/core';
import { AuthService } from '../services/auth.service';
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
  isLoggedIn = false;
  userData:any;
  constructor(private authservice: AuthService, private router: Router, private tokenService: TokenStorageServiceService,
 private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.isLoggedIn = this.authservice.isLoggedIn;
    this.userData = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')): '';
    this.authservice.authStatusSubject$.subscribe((res)=> {
      if(res.type === 'auth' && res.value === 'logout') {
          this.signOut();
      } else if(res.type === 'userData') {
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
    this.authservice.logoutUser(data)
    .subscribe(
      {
        next: (res) => console.log('user logged out successfully', res),
        error: (error)=> console.log('error logging out', error)
      }
    );
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
