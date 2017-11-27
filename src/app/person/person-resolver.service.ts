import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { PeopleService } from '../services/people.service';



@Injectable()
export class PersonResolverService {

  constructor(
    private router: Router,
    private productService: PeopleService
  ) { }

  // resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any[]> {
  //   const slug = route.paramMap.get('username');

  //   return this.productService.getPerson(slug).map(data => {
   
  //   });
  // }

}
