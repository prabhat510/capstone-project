import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  showMenu: boolean = false;
  isAdmin: Boolean = false;
  username: any = '';
  constructor(@Inject(PLATFORM_ID) private platformId: Object, private authservice: AuthService, private router: Router) { }
  isLoggedIn: Boolean = false;


  ngOnInit(): void {
    if(isPlatformBrowser(this.platformId)) {
      this.isLoggedIn = this.authservice.loggedIn();
      if (localStorage.getItem('user')) {
        this.username = JSON.parse(localStorage.getItem('user')).username;
        this.isAdmin = JSON.parse(localStorage.getItem('user')).isAdmin;
      }
    }
  }
  signOut() {
    this.isLoggedIn = false;
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
}
