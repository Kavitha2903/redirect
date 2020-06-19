import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashComponent} from '../app/dash/dash.component';
import {DataComponent} from '../app/data/data.component';


const routes: Routes = [
  { path:'',component: DashComponent},
  { path:'Data',component: DataComponent},
 // { path: '',   redirectTo: '/Dash', pathMatch: 'full' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[DashComponent,DataComponent]