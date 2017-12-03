import { Component, OnInit, Input } from '@angular/core';
import { PeopleService } from '../../services/people.service';

@Component({
  selector: 'app-person-others',
  templateUrl: './person-others.component.html',
  styleUrls: ['./person-others.component.scss']
})
export class PersonOthersComponent implements OnInit {

  _profile: any;
  people: any;
  @Input()
  set profile(profile: string) {
     this._profile = profile;
     console.log("wekrlwe", this._profile);
     if(this._profile){
      this.service.getInvolvedPeople(this._profile).subscribe(data => this.people = data["value"]);
    }
  }
  constructor(private service: PeopleService) { }


  ngOnInit() {
   
  }
}
