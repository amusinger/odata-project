import { Component, OnInit, Input } from '@angular/core';
import { PeopleService } from '../../services/people.service';

@Component({
  selector: 'app-person-trips',
  templateUrl: './person-trips.component.html',
  styleUrls: ['./person-trips.component.scss']
})
export class PersonTripsComponent implements OnInit {

  @Input() profile: any;
  constructor(private service: PeopleService) { }

  trips: any;
  ngOnInit() {
    if(this.profile){
      this.service.getPersonTrips(this.profile).subscribe(data => this.trips = data["Trips"]);
    }
  }

}
