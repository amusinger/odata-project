import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AirportService {
  actionUrl= 'http://services.odata.org/TripPinRESTierService/';
  
  constructor(private http: HttpClient) { }

  public getAll<T>(): Observable<T> {
    return this.http.get<T>(this.actionUrl + 'Airports');
  }

  public load(): Promise<any> {
    return this.http.get('/assets/airports.json').toPromise();
  }
}
