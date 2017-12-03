import { Component, OnInit, Input } from '@angular/core';
import { PeopleService } from '../../services/people.service';

@Component({
  selector: 'app-person-trips',
  templateUrl: './person-trips.component.html',
  styleUrls: ['./person-trips.component.scss']
})
export class PersonTripsComponent implements OnInit {
  
  _profile: any;
  
  @Input()
  set profile(profile: string) {
     this._profile = profile;
     if(this._profile){
      console.log('he', this._profile);
      this.service.getPersonTrips(this._profile).subscribe(data => this.trips = data["Trips"]);
    }
  }
  constructor(private service: PeopleService) { }

  trips: any;
  ngOnInit() {
    
  
  }

}
