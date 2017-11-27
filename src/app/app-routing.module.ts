import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { HomeModule } from './home/home.module';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { PersonComponent } from './person/person.component';
import { AirportComponent } from './airport/airport.component';
import { AddPersonComponent } from './person/add-person/add-person.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: 'app/home/home.module#HomeModule',
        //component: HomeComponent
      },
      {
        path: '',
        component: HeaderComponent,
        outlet: 'header'
      },
      {
        path: '',
        component: FooterComponent,
        outlet: 'footer'
      },
      {
        path: 'profile',
        loadChildren: 'app/profile/profile.module#ProfileModule',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        canLoad: [AuthGuard]
      },
      {
        path: 'person/:username', 
        component: PersonComponent
      },
      {
        path: 'airport/:code', 
        component: AirportComponent
      },
      {
        path: 'add',
        component: AddPersonComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
