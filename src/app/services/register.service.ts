import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegisterModelVM } from '../interfaces/registerModelVM';
import {RegisterModel} from  '../interfaces/registerModel';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {


  baseUrl = 'https://localhost:7003/api/Account/Register';
  registerModel:RegisterModel={
    fullName:'fg',
    password:'',
    role:'',
    email:''
  };
  constructor(private http: HttpClient, private router:Router) {}

    addRegisterUser(registerModelVM: RegisterModelVM): Observable<RegisterModelVM> {
      this.registerModel.fullName=registerModelVM.fullName;
      this.registerModel.email=registerModelVM.email;
      this.registerModel.password=registerModelVM.password;
      this.registerModel.role="Student";

    console.log(this.registerModel);

    var response= this.http.post<RegisterModelVM>(this.baseUrl, this.registerModel);
    this.router.navigate(['login']);
    return response;
  }

 
}
