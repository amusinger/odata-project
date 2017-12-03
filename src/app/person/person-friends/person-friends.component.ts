import { Component, OnInit, Input } from '@angular/core';
import { PeopleService } from '../../services/people.service';

@Component({
  selector: 'app-person-friends',
  templateUrl: './person-friends.component.html',
  styleUrls: ['./person-friends.component.scss']
})
export class PersonFriendsComponent implements OnInit {
  _profile: any;
  friends: any;
  
  @Input()
  set profile(profile: string) {
     this._profile = profile;
     if(this._profile){
      this.service.getPersonFriends(this._profile).subscribe(data => this.friends = data["Friends"])
    }
  }
  constructor(private service: PeopleService) { }


  ngOnInit() {
  }

}
