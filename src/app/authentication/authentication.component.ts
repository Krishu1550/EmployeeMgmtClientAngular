import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationServices } from '../services/authentication.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css'],
})
export class AuthenticationComponent {
  loginForm: FormGroup;
  serviceAuthentication: AuthenticationServices;

  constructor(fb: FormBuilder, service: AuthenticationServices) {
    this.loginForm = fb.group({
      fullname: [''],
      email: [''],
      password: [''],
    });

    this.serviceAuthentication = service;
  }

  onLogin() {
    this.serviceAuthentication.onLogInService(this.loginForm).subscribe();
  }
  OnInit() {
    console.log(this.serviceAuthentication.jwtToken?.Token);
  }
}
