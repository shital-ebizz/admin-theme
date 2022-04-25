import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { SingupComponent } from './singup/singup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { FeatherModule } from 'angular-feather';
import { ChartistModule } from "ng-chartist";
import { SimplebarAngularModule } from 'simplebar-angular';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ApexNonAxisChartSeries, ApexResponsive, ApexChart } from "ng-apexcharts";
import { HttpClientModule } from '@angular/common/http';

import { LayoutModule } from '../layout/layout.module'
import { Home, Users, Grid, File, Bell, ChevronsUp, LogOut, User } from 'angular-feather/icons';
import { MatTableModule } from '@angular/material/table';
import { MatSliderModule } from '@angular/material/slider';

import { RouterModule } from '@angular/router';

const icons = {  
  Home,
  Users,
  Grid,
  File,
  Bell,
  LogOut,
  User
};


@NgModule({
  declarations: [  
    LoginComponent,
         SingupComponent,
         ForgotPasswordComponent,
         ChangePasswordComponent               
  ],
  imports: [
    FeatherModule.pick(icons),
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // FontAwesomeModule,
    RouterModule,
    ChartistModule,
    SimplebarAngularModule,
    NgApexchartsModule,
    LayoutModule,
    MatSliderModule,
    MatTableModule, 
    HttpClientModule
  ],
  exports: [
    MatTableModule
  ],
 schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AuthModule { }
