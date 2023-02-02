import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { AuthService } from './services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private router: ActivatedRoute) {

  }
  ngOnInit(): void {
    this.router.url.subscribe(params => console.log("url isbhsbhk", params[0].path)
    )
  }
  public onRouterOutletActivate(event: any) {
    console.log(event);
  }

}
