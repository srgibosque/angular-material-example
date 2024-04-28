import { Component, OnInit } from '@angular/core';
import { Credentials } from '../../models/credentials.dto';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  animations:[
    trigger('fadeInOut', [
      state('void', style({opacity: 0.2})),
      transition('void <=> *', animate(1500)),
    ])
  ],
})

export class LoginComponent implements OnInit {
  credentials: Credentials;
  email: FormControl;
  password: FormControl
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router){
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

    this.router.navigate(['cards']);
  }
}
