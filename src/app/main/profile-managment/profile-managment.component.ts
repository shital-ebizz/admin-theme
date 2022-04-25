import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder, FormGroup, Validators
} from '@angular/forms';

@Component({
  selector: 'app-profile-managment',
  templateUrl: './profile-managment.component.html',
  styleUrls: ['./profile-managment.component.css']
})
export class ProfileManagmentComponent implements OnInit {
  profileForm!: FormGroup;
  passwordForm!: FormGroup;
  submitted = false;
  submitted1 = false;
  fileHolder: any;
  constructor(private formBuilder: FormBuilder,
    private cd: ChangeDetectorRef) { }
  

  ngOnInit(): void {
    this.profileForm = this.formBuilder.group({      
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', Validators.required],
     profile_pic:['',Validators.required]
    });

    this.passwordForm = this.formBuilder.group({
      Current_password: ['', Validators.required],
      new_password: ['', Validators.required],
      confirm_password: ['', Validators.required]
    });

  }
  
  url ='';

  editFile: boolean = true;
  removeUpload: boolean = false;
  
  get f()
  {
    return this.profileForm.controls;
  }
  get f1()
  {
    return this.passwordForm.controls
  }
  onProfileChange(event)
  {
    let file = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);     
      
      reader.onload = (event: any) => {
        console.log(event)
        this.url = event.target.result;    
      }      
     }
   }


  onProfile()
  {
    this.submitted = true;

    if (this.profileForm.invalid)
    {
      return;
    }
    console.log(this.profileForm.value);

  }

  passSubmit() {
    this.submitted1 = true;
    if (this.passwordForm.invalid)
    {
      return;
    }
  }
  
  onReset() {
    this.submitted = false;
    this.profileForm.reset();
  }
  
 
  

}
