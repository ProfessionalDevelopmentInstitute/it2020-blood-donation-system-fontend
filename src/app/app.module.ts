import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AlldonorComponent } from './alldonor/alldonor.component';
import { AddrecordComponent } from './addrecord/addrecord.component';
import { RecordComponent } from './record/record.component';
import { UpdatedonorComponent } from './updatedonor/updatedonor.component';
import { SearchbloodComponent } from './searchblood/searchblood.component';
import { RegisterComponent } from './register/register.component';
import { ViewdetailComponent } from './viewdetail/viewdetail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule} from '@angular/router';
import { DonorComponent } from './donor/donor.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AlldonorComponent,
    AddrecordComponent,
    RecordComponent,
    UpdatedonorComponent,
    SearchbloodComponent,
    RegisterComponent,
    ViewdetailComponent,
    DonorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
