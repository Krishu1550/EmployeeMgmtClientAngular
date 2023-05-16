import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegisterModelVM } from '../interfaces/registerModelVM';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {


  baseUrl = 'https://localhost:7003/api/Account/Register';
 
  constructor(private http: HttpClient) {}

    addRegisterUser(registerModel: RegisterModelVM): Observable<RegisterModelVM> {
    registerModel.email='';
    console.log(registerModel);
    return this.http.post<RegisterModelVM>(this.baseUrl, registerModel);
  }

 
}
