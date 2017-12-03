import { Component, OnInit } from '@angular/core';
import { AirportService } from '../services/airport.service';

@Component({
  selector: 'app-airport-search',
  templateUrl: './airport-search.component.html',
  styleUrls: ['./airport-search.component.scss']
})
export class AirportSearchComponent implements OnInit {

  place: string="";
  lat: any;
  lon: any;
  address: any;

  newLat: number;
  newLon: number;
  port;

  constructor(private portService: AirportService) { }

  ngOnInit() {
  }

  findAirport(place: string){
    this.portService.getCoordinates(place).subscribe(data => {
      console.log(data);
        this.lat = data.results[0].geometry.location.lat;
        this.lon = data.results[0].geometry.location.lon;
        this.address = data.results[0].formatted_address;
        this.findNearestAirport(this.lat, this.lon);
    })
  }

  findNearestAirport(lat: any, lon: any){
    let lat1 = Number(lat);
    let lon1 = Number(lon);
    this.portService.getNearestAirport(lat1, lat1).subscribe(
      data => {
        this.port = data as any;
        console.log(this.port);
        this.newLat  = this.port.Location.Loc.coordinates[0]
        this.newLon = this.port.Location.Loc.coordinates[1]
        
      }
    )
  }

}
