import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public email: any;

  constructor(private http: HttpClient,
  private authService:AuthService) { }

  ngOnInit(): void {
   this.email = localStorage.getItem('email');
  }

  logoutUser()
  {
    this.authService.logout();
   }
}
