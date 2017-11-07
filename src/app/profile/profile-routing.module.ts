import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { AuthGuard } from '../auth.guard';


const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    resolve: {
      testData: AuthGuard
    }
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
