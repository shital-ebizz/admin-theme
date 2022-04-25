import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FeatherModule } from 'angular-feather';
import { SidebarComponent } from './sidebar/sidebar.component';
import { Home, Users, Grid, File, Bell, ChevronsUp, User, LogOut, LogIn, ArrowLeft, AlignCenter,X ,Clock} from 'angular-feather/icons';
import { RouterModule } from '@angular/router';
import { SimplebarAngularModule } from 'simplebar-angular';


const icons = {
  Home,
  Users,
  Grid,
  Bell,
  ChevronsUp,
  LogOut,
  User,
  File,
  LogIn,
  ArrowLeft,
  AlignCenter,
  X,
  Clock
};
@NgModule({
  declarations: [

    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    FeatherModule.pick(icons),
    RouterModule,
    SimplebarAngularModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    FeatherModule
  ]
})
export class LayoutModule { }
