import { Component, OnInit } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { AuthService } from './services/auth.service';
import { TokenStorageServiceService } from './services/token-storage-service.service';
import { TokenInterceptorService } from './services/token-interceptor.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  showAlertBox = false;
  activeComponentName: string;
  constructor(private router: Router, private route: ActivatedRoute, private authService: AuthService,
     private tokenService: TokenStorageServiceService, private interceptorService: TokenInterceptorService) {

  }
  ngOnInit(): void {
    this.interceptorService.accessTokenSubject.subscribe(res=>{
      
    })
    this.authService.authStatusSubject$.subscribe(res => {
      if (res.type === 'auth' && (res.value === 'cancel' || res.value === 'logout')) {
        this.showAlertBox = false;
      }
    })
    // this code fetches the current active route dynamically
    this.router.events.pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(route => {
        const routeEvent = route as any;
        this.tokenService.setToken('route', routeEvent.url);
      }
      )

  }

}
