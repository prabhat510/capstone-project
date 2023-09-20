import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-alert-box',
  templateUrl: './alert-box.component.html',
  styleUrls: ['./alert-box.component.css']
})
export class AlertBoxComponent  {

  @Input() message = 'are you sure you want to logout?';
  constructor(private authService: AuthService) { }


  confirmLogOut(logoutUser:boolean) {
    if(logoutUser) {
      this.authService.emitLogout();
    } else {
      this.authService.emitCancelLogout();
    }
  }
}
