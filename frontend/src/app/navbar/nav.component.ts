import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Output() logOutInitialted = new EventEmitter();
  showMenu: boolean = false;
  isAdmin: Boolean = false;
  username: any = '';
  constructor(private authservice: AuthService, private router: Router) { }
  isLoggedIn: Boolean = false;


  ngOnInit(): void {
    this.authservice.authStatusSubject$.subscribe((res)=> {
      if(res === 'logout') {
          this.signOut();
      }
    })
    this.isLoggedIn = this.authservice.loggedIn()
    if (localStorage.getItem('user')) {
      this.username = JSON.parse(localStorage.getItem('user')).username;
      this.isAdmin = JSON.parse(localStorage.getItem('user')).isAdmin;
    }
  }
  signOut() {
    this.isLoggedIn = false;
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setTimeout(() => {
      window.location.reload();
    }, 500);
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
}
