import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DivisionComponent } from './division/division.component';
import { DivisionAddComponent } from './division-add/division-add.component';

const routes: Routes = [
  {path:"dashboard",component:DashboardComponent},
  {path:"divisions-add",component:DivisionAddComponent},
  {path:"divisi",component:DivisionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
