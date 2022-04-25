import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { data } from 'jquery';
import { OrderPipe } from 'ngx-order-pipe';
import Swal from 'sweetalert2';
import { AlertService } from '../_alert/alert.service';

import { User } from '../_modal/user';
import { AuthService } from '../_service/auth.service';


@Component({
  selector: 'app-user-managment',
  templateUrl: './user-managment.component.html',
  styleUrls: ['./user-managment.component.css']
})
export class UserManagmentComponent implements OnInit {
  editForm!: FormGroup;
  user: any;
  submitted = false;
  collectionSize = 0;
  element: any;
  pageSize = 5
  page = 1;
  paginateData: any[] = [];
  premiumData: any[] = []

  public per_page: number = 3;
  public elements: any = []
  public total: number = 12;
  public total_page: number = 12;
  //         userObject: User;
  userFilter: any = { first_name: '' };
  order: string = '';
  array: any[] = [];
  sortCollection: any[];


  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private alertService: AlertService,
    private orderPipe: OrderPipe
  ) {
    this.sortCollection = orderPipe.transform(this.elements, this.elements.first_name)
    console.log(this.orderPipe.transform(this.sortCollection));
  }


  result: any;
  avatar!: string;
  email!: string;
  first_name!: string;
  last_name!: string;
  reverse: boolean = false;
  id!: number;
  caseInsensitive: boolean = false;

  get f() { return this.editForm.controls }

  updateForm(id: number, avatar: string, email: string, first_name: string, last_name: string) {
    this.id = id;
    this.avatar = avatar;
    this.email = email;
    this.first_name = first_name;
    this.last_name = last_name;

    this.editForm = this.formBuilder.group({
      avatar: [this.avatar, Validators.required],
      email: [this.email, Validators.required],
      first_name: [this.first_name, Validators.required],
      last_name: [this.last_name, Validators.required]
    });

  }

  ngOnInit(): void {
    this.editForm = this.formBuilder.group({
      avatar: ['', Validators.required],
      email: ['', Validators.required],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required]
    })
    this.authService.getAllUser().subscribe((data) => {
      this.element = data;
      this.per_page = data.per_page;
      this.total = data.total;
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.editForm.invalid) {

      return;

    }
    else {
      this.authService.updateUser(this.editForm.value, this.id)
        .subscribe(res => {
          console.log(res)
        });

      this.showToastSuccess();
      this.submitted = false;
      this.editForm.reset();
      document.getElementById("updateclose")?.click()
    }
  }
  deleteUser(id: number) {
    this.authService.deleteUser(id)
      .subscribe(res => {
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
          }
        })
        this.editForm.reset();
      })
  }

  View(avatar: string, email: string, first_name: string, last_name: string) {
    this.avatar = avatar;
    this.email = email;
    this.first_name = first_name;
    this.last_name = last_name;
  }
  //toster start 
  showToastSuccess() {
    this.alertService.showSuccess("Profile Sucessfully updated");
  }

  showError() {
    this.alertService.showError("Data is deleted successful");
  }

  showInfo() {
    this.alertService.showInfo("SomeThing is Wrong");
  }
  //toster end


  sortOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }
    this.order = value;
  }

  getPremiumData(page: any) {

    this.authService.getAllUsers(page).subscribe((data) => {
      this.element = data;
      this.per_page = data.per_page;
      this.total = data.total;
    });
  }



}

