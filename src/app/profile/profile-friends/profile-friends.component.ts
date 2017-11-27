import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { MatPaginator } from '@angular/material';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { PeopleService } from '../../services/people.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-profile-friends',
  templateUrl: './profile-friends.component.html',
  styleUrls: ['./profile-friends.component.scss']
})
export class ProfileFriendsComponent implements OnInit {
 
public values: any[];  

  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
    this.peopleService.getMyFriends().then(data => this.values = data["value"]);
    
  }
}
export interface UserData {
  UserName: string;
  FirstName: string;
  LastName: string;
  Gender: string;
}
