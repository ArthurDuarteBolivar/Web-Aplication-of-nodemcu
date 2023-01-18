import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  color1: string = "black"
  color2: string = "black"
  margin1: number = 2
  margin2: number = 2

  constructor(private fb: FormBuilder){}

  loginForm = this.fb.group({
    user: ['', Validators.required],
    password: ['', Validators.required]
  })

  login(){
    console.log(this.loginForm.value.user)
    console.log(this.loginForm.value.password)
  }




}
