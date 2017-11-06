import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { PeopleService } from '../services/people.service';
import {MatButtonModule, MatCardModule} from '@angular/material';

@NgModule({
  imports: [
    ProfileRoutingModule,
    CommonModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [PeopleService],
  declarations: [ProfileComponent]
})
export class ProfileModule { }
