import { NavComponent } from './nav.component';
import { AuthService } from '../services/auth.service';
import { Router } from 'express';
import { HttpClient } from '@angular/common/http';

describe('NavComponent', () => {
  let component: NavComponent;
  let authService: AuthService;
  let httpclient: HttpClient;
  let router: Router

  beforeEach(() => {
    authService = new AuthService(httpclient, router);
    component = new NavComponent(authService);
  });

  it('should initialize isLoggedIn to the value returned from AuthService', () => {
    jest.spyOn(authService, 'loggedIn').mockReturnValue(true);
    component.ngOnInit();
    expect(component.isLoggedIn).toBe(true);
  });

  it('should get the username and isAdmin status from local storage', () => {
    localStorage.setItem('user', JSON.stringify({username: 'test', isAdmin: true}));
    component.ngOnInit();
    expect(component.username).toBe('test');
    expect(component.isAdmin).toBe(true);
  });

  it('should call AuthService logoutUser method when signOut is called', () => {
    jest.spyOn(authService, 'logoutUser');
    component.signOut();
    expect(authService.logoutUser).toHaveBeenCalled();
  });

  it('should remove the user from local storage when signOut is called', () => {
    localStorage.setItem('user', JSON.stringify({username: 'test', isAdmin: true}));
    component.signOut();
    expect(localStorage.getItem('user')).toBe(null);
  });

  it('should toggle the showMenu value when toggleMenu is called', () => {
    component.showMenu = false;
    component.toggleMenu();
    expect(component.showMenu).toBe(true);
    component.toggleMenu();
    expect(component.showMenu).toBe(false);
  });

  it('should set isdesktopResolution to true when window width is greater than or equal to 1024', () => {
    jest.spyOn(window, 'innerWidth', 'get').mockReturnValue(1025);
    component.onResize(null);
    expect(component.isdesktopResolution).toBe(true);
  });

  it('should set isdesktopResolution to false when window width is less than 1024', () => {
    jest.spyOn(window, 'innerWidth', 'get').mockReturnValue(1023);
    component.onResize(null);
    expect(component.isdesktopResolution).toBe(false);
  });
});
