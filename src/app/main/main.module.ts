import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { IndexComponent } from './index/index.component';
import { LayoutModule } from '../layout/layout.module';
import { NotificationComponent } from './notification/notification.component';
import { UserReportManagmentComponent } from '../user-report-managment/user-report-managment.component';
import { UserManagmentComponent } from '../user-managment/user-managment.component';
import { FormsModule } from '@angular/forms';

import { Home, Users, Grid, File, Bell, ChevronsUp, User, LogOut, LogIn, ArrowLeft, AlignCenter, X, Clock } from 'angular-feather/icons';
import { RouterModule } from '@angular/router';
import { SimplebarAngularModule } from 'simplebar-angular';
import { FeatherModule } from 'angular-feather';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { ChartistModule } from "ng-chartist";
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileManagmentComponent } from './profile-managment/profile-managment.component';
import { AuthGuard } from '../_service/auth.guard';
import { OrderModule } from 'ngx-order-pipe';
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'

const icons =
{
  Home,
  Users,
  Grid,
  File,
  Bell,
  ChevronsUp,
  User,
  LogOut,
  LogIn,
  ArrowLeft,
  AlignCenter,
  X,
  Clock
  }

@NgModule({
  declarations: [    
    IndexComponent, 
    UserManagmentComponent,
    UserReportManagmentComponent,
    NotificationComponent,
    ProfileManagmentComponent
  ],
  imports: [
    FeatherModule.pick(icons),
    CommonModule,
    MainRoutingModule,
    FeatherModule,
    
    LayoutModule,
    SimplebarAngularModule,
    RouterModule,
    NgxDaterangepickerMd.forRoot(),
    FormsModule,
    ChartistModule,
    NgApexchartsModule,
    NgbPaginationModule,
    NgbAlertModule,
     OrderModule,
    FilterPipeModule,
    ReactiveFormsModule,

  ],
  providers:[AuthGuard]
})
export class MainModule { }
