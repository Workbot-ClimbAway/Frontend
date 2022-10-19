import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {ApiService} from "../../service/api.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm !: FormGroup;
  passwordType: string = 'text';
  passwordShown: boolean = true;

  constructor(private formBuilder: FormBuilder, public api: ApiService) {
    this.registerForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required,
        Validators.pattern(/^([a-z]+)([A-Z]+)([0-9]+)|([A-Z]+)([a-z]+)([0-9]+)|([A-Z]+)([0-9]+)([a-z]+)|([a-z]+)([0-9]+)([A-Z]+)|([0-9]+)([a-z]+)([A-Z]+)|([0-9]+)([A-Z]+)([a-z]+)$/),
        Validators.minLength(5)]),
      terms: new FormControl(false, [Validators.requiredTrue]),
      district: new FormControl('')
    })
  }

  ngOnInit(): void {

  }

  togglePassword(){
    if(this.passwordShown){
      this.passwordType = 'password';
      this.passwordShown = false;
    }else{
      this.passwordType = 'text';
      this.passwordShown = true;
    }
  }

  postUser(){
    this.api.postUser(this.registerForm.value).subscribe(data => {
      console.log(data)
    })
  }

  openDialog(){
    //.dialog.open(DialogConfirmComponent);
  }

}
