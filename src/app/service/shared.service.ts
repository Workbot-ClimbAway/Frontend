import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  constructor() {
  }

  getAddUsuario() {
    let userInfo =JSON.parse(localStorage.getItem('addUsuario')!);
    return userInfo;
  }
}
