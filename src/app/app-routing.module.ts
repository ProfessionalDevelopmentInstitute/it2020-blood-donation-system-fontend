import {Component, NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddrecordComponent } from './addrecord/addrecord.component';
import { AlldonorComponent } from './alldonor/alldonor.component';
import { LoginComponent } from './login/login.component';
import { RecordComponent } from './record/record.component';
import { RegisterComponent } from './register/register.component';
import { SearchbloodComponent } from './searchblood/searchblood.component';
import { UpdatedonorComponent } from './updatedonor/updatedonor.component';
import { ViewdetailComponent } from './viewdetail/viewdetail.component';
import {DonorComponent} from './donor/donor.component';

const routes: Routes = [
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  {path : 'login', component : LoginComponent},
  {path : 'register', component : RegisterComponent},
  {path : 'searchblood', component : SearchbloodComponent},
  {path : 'alldonor', component: AlldonorComponent},
  {path : 'addrecord', component : AddrecordComponent},
  {path : 'record/:id', component : RecordComponent},
  {path : 'updatedonor/:id', component : UpdatedonorComponent},
  {path : 'viewdetail/:id', component : ViewdetailComponent},
  {path : 'donor', component : DonorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {RegisterComponent ; SearchbloodComponent ; AlldonorComponent ;
   AddrecordComponent ;  RecordComponent ; UpdatedonorComponent  ; ViewdetailComponent ; DonorComponent ;
  }
