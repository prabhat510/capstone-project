import { Injectable } from '@angular/core';
import { Cookie } from 'ng2-cookies';


@Injectable({
  providedIn: 'root'
})
export class TokenStorageServiceService {

  constructor() { }

  getToken(key: string) {
    return Cookie.get(key);
  }

  setToken(key: string, value: string) {
    Cookie.set(key, value);
  }

  removeToken(key:string) {
    Cookie.delete(key);  
  }

}
