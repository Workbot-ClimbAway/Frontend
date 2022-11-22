import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { ApiService } from 'src/app/service/api.service';
import { SharedService } from 'src/app/service/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  passwordType: string = 'password';
  passwordShown: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    public api: ApiService,
    private router: Router,
    private change: AppService,
    private sharedService: SharedService
  ) {
    // Formulario de registro
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {}

  public togglePassword(): void {
    if (this.passwordShown) {
      this.passwordShown = false;
      this.passwordType = 'password';
    } else {
      this.passwordShown = true;
      this.passwordType = 'text';
    }
  }

  signIn() {
    let token: {};
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      this.api.login(this.loginForm.value).subscribe(
        (res: any) => { 
          console.log(res);
          this.api
        .getScalerByEmailAndPassword(
          this.loginForm.value.email,
          this.loginForm.value.password
        )
        .subscribe(
          (data: any) => {
            token = {...res, ...data};
            localStorage.setItem('addUsuario', JSON.stringify(token));
            this.change.changeHandler$.emit(true);
            this.loginForm.reset();
            alert('Bienvenido ' + data.firstName + ' ' + data.lastName);
            this.router.navigate(['']);
          },
          (error: any) => {
            alert('User or password incorrect');
          }
        );
        });
    } else {
      alert('Please fill in all the fields');
    }
  }
}
