import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  passwordType: string = 'text';
  passwordShown: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  togglePassword(){
    if(this.passwordShown){
      this.passwordShown = false;
    }else{
      this.passwordType = 'text';
      this.passwordShown = true;
    }
  }

}
