import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AirportService {
  actionUrl= 'http://services.odata.org/TripPinRESTierService/';

  getCoordUrl = 'https://maps.googleapis.com/maps/api/geocode/json?oe=utf-8&address=';
  
  constructor(private http: HttpClient) { }

  public getAll<T>(): Observable<T> {
    return this.http.get<T>(this.actionUrl + 'Airports');
  }

  public load(): Promise<any> {
    return this.http.get('/assets/airports.json').toPromise();
  }

  public getAirport<T>(port: String): Observable<T> {
    return this.http.get<T>(this.actionUrl + 'Airports(\'' + port + '\')');
  }

  public getCoordinates(address: string): any{
    return this.http.get(this.getCoordUrl + address);
  }

  public getNearestAirport(lat: number, lng: number ){
    return this.http.get(this.actionUrl+'GetNearestAirport(lat='+lat+','+'lon='+lng+')');    
  }

  public getAirlines(){
    return this.http.get(this.actionUrl+'Airlines');
  }
}
