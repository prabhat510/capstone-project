import { Component, ElementRef, Input, Renderer2 } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-alert-box',
  templateUrl: './alert-box.component.html',
  styleUrls: ['./alert-box.component.css']
})
export class AlertBoxComponent  {

  @Input() message = 'are you sure you want to logout?';
  constructor(private authService: AuthService, private renderer: Renderer2, private elementRef: ElementRef) { }


  confirmLogOut(logoutUser:boolean) {
    const body = this.elementRef.nativeElement.ownerDocument.body;
    if(logoutUser) {
      this.authService.emitLogout();
    } else {
      this.authService.emitCancelLogout();
    }
    this.renderer.setStyle(body, 'overflow', 'visible');
  }
}
