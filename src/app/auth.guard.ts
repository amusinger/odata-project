import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './services/auth.service';
import { PeopleService } from './services/people.service';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService,
              private router: Router, 
              private peopleService: PeopleService,
              private http:HttpClient) {}
  
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      return new Promise((resolve, reject) => {
        this.peopleService.getMe().toPromise().then(
          res => {
            resolve(res);
            console.log(res);
          }
        );
      });
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.authorized) {
        return true;
      } else {
        this.router.navigate(['/']);
        return false;
      }
  }
  canLoad(route: Route): boolean | Observable<boolean> | Promise<boolean> {
    return this.authService.authorized;
  }
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return this.canActivate(childRoute, state);
  }
}
