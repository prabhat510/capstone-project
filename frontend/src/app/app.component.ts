import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private authservice: AuthService, private router: Router) {

  }
  ngOnInit(): void {
    console.log('executed');

    //   this.authservice.verifyToken(`http://localhost:3000/verify/token`).subscribe(data => console.log(data),
    //     err => {
    //       if (err instanceof HttpErrorResponse) {
    //         if (err.status === 401) {
    //           // this.router.navigate(['/login'])
    //         }
    //       }
    //     }
    //   )
  }


}
