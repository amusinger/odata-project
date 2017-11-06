import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './services/auth.service';


@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService,
    private router: Router) {}

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
