import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { PeopleService } from '../services/people.service';
import {MatButtonModule, MatCardModule} from '@angular/material';
import { ProfileFriendsComponent } from './profile-friends/profile-friends.component';
import { CoreModule } from '../core/core.module';
import { ProfileTripsComponent } from './profile-trips/profile-trips.component';

@NgModule({
  imports: [
    ProfileRoutingModule,
    CommonModule,
    CoreModule
  ],
  providers: [PeopleService],
  declarations: [ProfileComponent, ProfileFriendsComponent, ProfileTripsComponent]
})
export class ProfileModule { }
