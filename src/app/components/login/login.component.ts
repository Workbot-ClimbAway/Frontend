import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {Router} from "@angular/router";
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  passwordType: string = 'password';
  passwordShown: boolean = false;

  constructor(private formBuilder: FormBuilder, public api: ApiService, private router: Router) {
    // Formulario de registro
    this.loginForm = this.formBuilder.group({
      email: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    })
  }

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

  signIn(){
    if(this.loginForm.valid){
      this.api.getScalerByEmailAndPassword(this.loginForm.value.email, this.loginForm.value.password).subscribe((data: any) => {
        localStorage.setItem('addUsuario', JSON.stringify(data[0]));
        this.loginForm.reset();
        alert('Bienvenido ' + data[0].first_name + ' ' + data[0].last_name);
        this.router.navigate(['']);
      }, (error: any) => {
        alert('User or password incorrect');
      });
    }else{
      alert('Please fill in all the fields');
    }
  }
}
