import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationServices } from './authentication.service';

@Injectable()
export class AuthGuardServices implements CanActivate {
  authservice: AuthenticationServices;
  router: Router;
  constructor(authenticationServices: AuthenticationServices, router: Router) {
    this.authservice = authenticationServices;
    this.router = router;
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // if (
    //   localStorage.getItem('Token') == null ||
    //   localStorage.getItem('Token') == ''
    // ) {
    //   this.router.navigate(['login']);
    //   return true;
    // }
    return true;
  }
}
