import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { MainModule } from './main/main.module';
import { NgApexchartsModule } from "ng-apexcharts";
import * as $ from 'jquery';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthGuard } from './_service/auth.guard';
import { NgxSpinnerModule } from "ngx-spinner";

import { ToastrModule } from 'ngx-toastr';
import { RouterModule, ROUTES } from '@angular/router';
//import { DatepickerModule } from 'ngx-date-picker';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    MainModule,    
    NgApexchartsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule,
    AuthModule,
    FormsModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    RouterModule,
    NgxSpinnerModule,

  
   
   //DatepickerModule
    
  ],

  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports:[RouterModule]
  
})
export class AppModule { }
function routes(routes: any): any[] | import("@angular/core").Type<any> | import("@angular/core").ModuleWithProviders<{}> {
  throw new Error('Function not implemented.');
}

