import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegisterModel } from '../interfaces/registerModel';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {


  baseUrl = 'https://localhost:7003/api/Account/Register';
 
  constructor(private http: HttpClient) {}

    addRegisterUser(registerModel: RegisterModel): Observable<RegisterModel> {
    registerModel.email='';
    console.log(registerModel);
    return this.http.post<RegisterModel>(this.baseUrl, registerModel);
  }

 
}
