import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AuthGuard } from './auth.guard';
import { DeactivateGuard } from './deactivate.guard';
import { AuthService } from './services/auth.service';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';
import { PersonModule } from './person/person.module';
import { AirportComponent } from './airport/airport.component';
import { FormsModule } from '@angular/forms';

import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    AppComponent,
    AirportComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HomeModule,
    PersonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBZRNZinTN1VE_aoFcq-od2_MAcw3vkVW4'
    })
  ],
  providers: [
    AuthService,
    AuthGuard,
    DeactivateGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
