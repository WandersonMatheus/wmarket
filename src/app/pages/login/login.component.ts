import { Component } from '@angular/core';
import { DefaultLoginLayoutComponent } from "../../components/template/default-login-layout/default-login-layout.component";
import { FormControl, FormGroup,ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimaryInputComponent } from '../../components/template/primary-input/primary-input.component';

@Component({
  selector: 'app-login',
  imports: [
    DefaultLoginLayoutComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor(){
    this.loginForm = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("" , [Validators.required, Validators.minLength(6)])
    });
  }
}
