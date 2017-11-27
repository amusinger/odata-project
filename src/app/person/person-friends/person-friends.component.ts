import { Component, OnInit, Input } from '@angular/core';
import { PeopleService } from '../../services/people.service';

@Component({
  selector: 'app-person-friends',
  templateUrl: './person-friends.component.html',
  styleUrls: ['./person-friends.component.scss']
})
export class PersonFriendsComponent implements OnInit {
  @Input() profile: any;
  constructor(private service: PeopleService) { }

  friends: any;

  ngOnInit() {
    
    if(this.profile){
      this.service.getPersonFriends(this.profile).subscribe(data => this.friends = data["Friends"])
    }
  }

}
