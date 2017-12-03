import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../services/people.service';
import { AirportService } from '../services/airport.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  airports;

  constructor(private airportService: AirportService) { }


  ngOnInit() {
   // this.airports = this.airportService.getAll().map(res => res["value"]);
    this.airportService.getAll()
    .subscribe(airports => {
        this.airports = airports['value'] as any[];
    })
  }
}
