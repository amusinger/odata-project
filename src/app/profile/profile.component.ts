import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../services/people.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public myProfile: any[];
  
  getProfile(): any {
    this.peopleService.getMe<any[]>()
    .subscribe((data: any[]) => this.myProfile = data);
  }
  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
    this.getProfile();
  }
}
