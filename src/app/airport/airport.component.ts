import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AirportService } from '../services/airport.service';
import { HelperService } from '../services/helper.service';

@Component({
  selector: 'app-airport',
  templateUrl: './airport.component.html',
  styleUrls: ['./airport.component.scss']
})
export class AirportComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private portService: AirportService,
    private imageService: HelperService) { }
   
 
    public port;
    code: String;
    private sub: any;

    lat: number;
    lng: number;
    label: string;

  ngOnInit() {
    console.log(this.route);
    this.sub = this.route.params.subscribe(params => {
      this.code = params['code']; 
      console.log(this.code)
      this.portService.getAirport(this.code)
        .subscribe(data => {
          this.port = data;
          this.lat = this.port.Location.Loc.coordinates[1];
          this.lng = this.port.Location.Loc.coordinates[0];
          this.label = this.port.IataCode;
          console.log(this.lat)
        });
       
      
   });
  }
    ngOnDestroy() {
      this.sub.unsubscribe();
    }
  }