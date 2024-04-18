import { Component, OnInit } from '@angular/core';
import { Credentials } from '../../models/credentials.dto';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  credentials: Credentials;
  email: FormControl;
  password: FormControl
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder){
    this.credentials = new Credentials(null, null);

    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.password = new FormControl('', Validators.required);
  
    this.loginForm = this.formBuilder.group({
      email: this.email,
      password: this.password,
    })
  }

  ngOnInit(): void {}

  checkLogin(): void {
    console.log('Email: ' + this.email.value);
    console.log('Pasword: ' + this.password.value);
  }
}
