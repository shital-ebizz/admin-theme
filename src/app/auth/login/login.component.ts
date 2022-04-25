import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/_service/auth.service';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/_alert/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;
  errorMessage = '';
  show = false;

  constructor(private formBulider: FormBuilder,
    public authService: AuthService,
    public router: Router,
    public alertService: AlertService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBulider.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],

    });

    if (this.authService.userDetails) {
      this.router.navigate(['/main/'])
    }


  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      this.showToastInfo();
      return;


    }
    else {

      this.authService.login(this.loginForm.value)
        .subscribe(data => {

          const details = {
            email: this.loginForm.value.email,
            token: data.token
          }

          localStorage.setItem('userdata', JSON.stringify(details));
          this.showToastSuccess();
          this.router.navigate(['/main/'])
        });
    }


  }
  onReset() {
    this.submitted = false;
    this.loginForm.reset();
  }

  showToastSuccess() {
    this.alertService.showSuccess("login Successful");
  }

  showToastInfo() {
    this.alertService.showInfo("Something is warning")
  }


}
