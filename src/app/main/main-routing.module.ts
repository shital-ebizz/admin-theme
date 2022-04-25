import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserManagmentComponent } from '../user-managment/user-managment.component';
import { UserReportManagmentComponent } from '../user-report-managment/user-report-managment.component';
import { IndexComponent } from './index/index.component';
import { NotificationComponent } from './notification/notification.component';
import { ProfileManagmentComponent } from './profile-managment/profile-managment.component';


const routes: Routes = [
  {
    path: '', component: IndexComponent
  },
  {
    path: 'user-management', component: UserManagmentComponent
  },
  {
    path: 'report-managment', component: UserReportManagmentComponent
  },
  {
    path: 'notification', component: NotificationComponent
  },
  {
    path: 'profile-managment', component: ProfileManagmentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
