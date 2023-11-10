import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { filter } from 'rxjs/operators';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from './services/auth.service';
import { TokenStorageServiceService } from './services/token-storage-service.service';
import { isPlatformBrowser } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  showAlertBox = false;
  activeComponentName: string;
  displayHeader = false;
  isBrowser = false;
  constructor(private router: Router, private authService: AuthService,
     private tokenService: TokenStorageServiceService, @Inject(PLATFORM_ID) private platformId: Object) {
  this.isBrowser = isPlatformBrowser(platformId);
  }
  ngOnInit(): void {
    if(this.isBrowser) {
      this.authService.authStatusSubject$.subscribe(res => {
        if (res.type === 'auth' && (res.value === 'cancel' || res.value === 'logout')) {
          this.showAlertBox = false;
        }
      })
      // this code fetches the current active route dynamically
      this.router.events.pipe(filter(event => event instanceof NavigationEnd))
        .subscribe(route => {
          const routeEvent = route as any;
          if(routeEvent.url.includes('login') || routeEvent.url.includes('register')) {
            this.displayHeader = false;
          } else {
            this.displayHeader = true;
            this.tokenService.setToken('route', routeEvent.url);
          }
        }
        )
    }
  }
}
