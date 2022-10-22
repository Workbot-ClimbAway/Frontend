import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {ApiService} from "../../service/api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm !: FormGroup;
  scalerForm! : FormGroup;
  climbingWallForm!: FormGroup;
  passwordType: string = 'text';
  passwordShown: boolean = true;
  forRegister: boolean = true;
  formScalerValue: boolean = false;
  formClimbingWallValue: boolean = false;

  constructor(private formBuilder: FormBuilder, public api: ApiService, private router: Router) {
    // Formulario de registro
    this.registerForm = this.formBuilder.group({
      email: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required,
        Validators.pattern(/^([a-z]+)([A-Z]+)([0-9]+)|([A-Z]+)([a-z]+)([0-9]+)|([A-Z]+)([0-9]+)([a-z]+)|([a-z]+)([0-9]+)([A-Z]+)|([0-9]+)([a-z]+)([A-Z]+)|([0-9]+)([A-Z]+)([a-z]+)$/),
        Validators.minLength(5)]),
        type: new FormControl('', [Validators.required])
    })
    // Formulario de escalador
    this.scalerForm = this.formBuilder.group({
      first_name: new FormControl('', [Validators.required]),
      last_name: new FormControl('', [Validators.required]),
      district: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      url_photo: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
    })
    // Formulario de gym
    this.climbingWallForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      district: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      logo_url: new FormControl('', [Validators.required]),
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

  Next(){
    if(this.registerForm.valid){
      if(this.registerForm.value.type == "scaler"){
        this.formScalerValue = true;
        this.forRegister = false;
      }else{
        this.formClimbingWallValue = true;
        this.forRegister = false;
      }
    }
    else
    {
      alert("Correctly fill in the data");
    }
  }

  signUpScaler(){
    if(this.scalerForm.valid){
      let data : {}
      data = this.registerForm.value;
      data = {...data, ...this.scalerForm.value}
      console.log(data);
      this.api.postScaler(data).subscribe({next: data => {
        console.log(data);
        this.scalerForm.reset();
        this.registerForm.reset();
        alert("User created successfully");
        this.router.navigate(['/login']);
      }, error: error => {
        console.log(error);
      }});
    }else{
      alert("Correctly fill in the data");
    }
  }

  signUpClimbingGym(){
    if(this.climbingWallForm.valid){
      let data : {}
      data = this.registerForm.value;
      data = {...data, ...this.climbingWallForm.value}
      console.log(data);
      this.api.postClimbingGym(data).subscribe({next: data => {
        console.log(data);
        this.registerForm.reset();
        this.climbingWallForm.reset();
        alert("User created successfully");
        this.router.navigate(['/login']);
      }, error: error => {
        console.log(error);
      }});
     
    }else{
      alert("Correctly fill in the data");
    }
  }

  Back(){
    this.forRegister = true;
    this.formScalerValue = false;
    this.formClimbingWallValue = false;
  }

}
