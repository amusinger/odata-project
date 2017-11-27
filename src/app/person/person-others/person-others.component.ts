import { Component, OnInit, Input } from '@angular/core';
import { PeopleService } from '../../services/people.service';

@Component({
  selector: 'app-person-others',
  templateUrl: './person-others.component.html',
  styleUrls: ['./person-others.component.scss']
})
export class PersonOthersComponent implements OnInit {

  @Input() profile: any;
  constructor(private service: PeopleService) { }

  people: any;
  ngOnInit() {
    if(this.profile){
      this.service.getInvolvedPeople(this.profile).subscribe(data => this.people = data["value"]);
    }
  }
}
