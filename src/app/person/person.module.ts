import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonComponent } from './person.component';
import { PersonFriendsComponent } from './person-friends/person-friends.component';
import { PersonTripsComponent } from './person-trips/person-trips.component';
import { AddPersonComponent } from './add-person/add-person.component';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { PersonOthersComponent } from './person-others/person-others.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule
  ],
  declarations: [PersonComponent, PersonFriendsComponent, PersonTripsComponent, AddPersonComponent, PersonOthersComponent]
})
export class PersonModule { }
