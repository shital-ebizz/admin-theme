import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import Validation from './must-match.validators';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  forgotForm!: FormGroup;
  submitted = false;
  
  constructor(private formBuilder: FormBuilder)
  {  }

  ngOnInit(): void {
    this.forgotForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirm_password: ['', [Validators.required, Validators.minLength(6)]]
    },
      {
        validators: [Validation.match('password', 'confirm_password')]
      });
  }
  get f()
  {
    return this.forgotForm.controls;
  }
  
  onSubmit()
  { 
    this.submitted = true;
    console.log( this.forgotForm.value)

    //stop if form is invalid
    if (this.forgotForm.invalid)
    {
      return;
     }
  }
   
  onReset()
  {
    this.submitted = false;
    this.forgotForm.reset();
  }
  
}
