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


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HomeModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    DeactivateGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
