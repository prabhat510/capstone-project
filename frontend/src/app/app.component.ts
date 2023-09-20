import { Component, OnInit } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  showAlertBox = false;
  activeComponentName: string;
  setBgColor = false;
  constructor(private router: Router, private route: ActivatedRoute, private authService: AuthService) {

  }
  ngOnInit(): void {
    this.authService.authStatusSubject$.subscribe(res => {
      if(res.type === 'auth' && (res.value === 'cancel' || res.value === 'logout')) {
        this.showAlertBox = false;
      }
    })
    // this code fetches the current active route dynamically
    this.router.events.pipe(filter(event => event instanceof NavigationEnd), map(route => this.route.firstChild))
    .subscribe(route => {
      if(route.routeConfig.component?.name){ 
          this.activeComponentName = route.routeConfig.component.name;
          console.log('route active====', this.activeComponentName);
        }
    }
    )
    
  }
  public onRouterOutletActivate(event: any) {
    console.log(event);
  }

}
