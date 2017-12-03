import { Component, OnInit } from '@angular/core';
import { AirportService } from '../services/airport.service';

@Component({
  selector: 'app-airline',
  templateUrl: './airline.component.html',
  styleUrls: ['./airline.component.scss']
})
export class AirlineComponent implements OnInit {

  lines:any 
  items: any
  constructor(private airlineService: AirportService) { }

  ngOnInit() {
    this.airlineService.getAirlines().subscribe(
      data => {
        this.lines = data["value"];
        this.airlineService.load().then(data =>{
          this.items = data['lines']
          console.log(data);
        });
      }
    );
    
  }

}
