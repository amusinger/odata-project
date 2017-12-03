import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../services/people.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private peopleService: PeopleService) { }

    public profile;
    username: String;
    private sub: any;

  ngOnInit() {
    console.log(this.route);
    this.sub = this.route.params.subscribe(params => {
      this.username = params['username']; 
      console.log(this.username)
      this.peopleService.getPerson(this.username)
        .subscribe(data => this.profile = data);
        console.log(this.profile)      
   });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
