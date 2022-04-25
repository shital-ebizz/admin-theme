import { Component, OnInit } from '@angular/core';
import { AlertService } from './_alert/alert.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 

  constructor(private alertService:AlertService) { }
  title = 'Task_5';
  
  showToastSuccess() {
    this.alertService.showSuccess("This is success message");
  }
  
  

}
