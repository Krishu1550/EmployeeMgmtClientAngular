import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationServices } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css'],
})
export class AuthenticationComponent {
  loginForm: FormGroup;
  serviceAuthentication: AuthenticationServices;
  router: Router;

  constructor(
    fb: FormBuilder,
    service: AuthenticationServices,
    router: Router
  ) {
    this.loginForm = fb.group({
      fullname: [''],
      email: [''],
      password: [''],
    });
    this.router = router;
    this.serviceAuthentication = service;
  }

  onLogin() {
    this.serviceAuthentication
      .onLogInService(this.loginForm)
      .subscribe((result) => {
        console.log(result);
        if (result) {
          this.router.navigate(['student']);
        }
      });
  }
  OnInit() {
    console.log(this.serviceAuthentication.jwtToken?.token);
  }
}
