import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { UserData } from '../home/home-people/home-people.component';

@Injectable()
export class PeopleService {

  constructor(private http: HttpClient) { }

  private actionUrl: string = 'http://services.odata.org/TripPinRESTierService/';
  subject: Subject<UserData> = new Subject();
  results = this.subject.asObservable();
  getPeople() {
    this.http.get(this.actionUrl +'People').subscribe(data => {
      for (let i = 0; i < data['value'].length; i ++) {
        this.subject.next(data['value'][i]);
      }
    });
  }

  public getAll<T>(): Observable<T> {
    return this.http.get<T>(this.actionUrl +'People');
  }

  public getMe<T>(): Observable<T>{
    return this.http.get<T>(this.actionUrl + '(S(3mslpb2bc0k5ufk24olpghzx))/Me')
  }

  

}

