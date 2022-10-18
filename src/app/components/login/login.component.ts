import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  passwordType: string = 'password';
  passwordShown: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public togglePassword(): void{
    if(this.passwordShown){
      this.passwordShown = false;
      this.passwordType = 'password';
    }else{
      this.passwordShown = true;
      this.passwordType = 'text';
    }
  }

  browse(route: string){
    this.router.navigate([route])
  }
}
