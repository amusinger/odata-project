import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { AirportService } from '../../services/airport.service';
import { Observable } from 'rxjs/Observable';
import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-home-airports',
  templateUrl: './home-airports.component.html',
  styleUrls: ['./home-airports.component.scss']
})
export class HomeAirportsComponent implements OnInit {
 
  @Input() airports: any[];
  
  items: any[];
  constructor(private imageAirports: AirportService) { }

  ngOnInit() {
    this.imageAirports.load().then(data => this.items = data);
    console.log(this.airports);
  }
  
 
}

