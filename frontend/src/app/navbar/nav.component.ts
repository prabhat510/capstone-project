import { Component, HostListener, OnInit } from '@angular/core';
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
  constructor(private authservice: AuthService) { }
  isLoggedIn: Boolean = false;


  ngOnInit(): void {
    this.isLoggedIn = this.authservice.loggedIn()
    if (localStorage.getItem('user')) {
      this.username = JSON.parse(localStorage.getItem('user')).username;
      this.isAdmin = JSON.parse(localStorage.getItem('user')).isAdmin;
    }
  }
  signOut() {
    this.authservice.logoutUser();
    this.isLoggedIn = false;
    localStorage.removeItem('user');
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
}
