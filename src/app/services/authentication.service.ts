import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '../interfaces/loginModel';
import { LoginJWT } from '../interfaces/loginJwt';
import { Observable, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationServices {
  baseUrl = 'https://localhost:7003/api/Account/';
  constructor(private http: HttpClient) {}
  public user?: Observable<LoginJWT | null>;
  jwtToken?: LoginJWT | null;
  token: string | null = null;

  onLogInService(loginForm: any) {
    console.log(loginForm.value);
    return this.http
      .post('https://localhost:7003/api/Account/Login', loginForm.value)
      .pipe(
        tap((res) => {
          console.log(res);
          this.jwtToken = res as LoginJWT;
          this.token = this.jwtToken.Token;
        })
      );
  }
  getToken(): string | null {
    return this.token;
  }

  isLoggedIn(): boolean {
    return !!this.token;
  }
  logout(): void {
    this.token = null;
  }
}
