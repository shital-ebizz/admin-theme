import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators,FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  notificationForm!: FormGroup;
  submitted = false;

  constructor( private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.notificationForm = this.formBuilder.group({
      Select_name: ['', Validators.required],
      title: ['', Validators.required],
      discription: ['', Validators.required]
    });

  }
    get f()
    { 
      return this.notificationForm.controls;
    }
  
  onSubmit()
  { 
    this.submitted = true;

    if (this.notificationForm.invalid)
    {
      return;
     }
  }
  

}
