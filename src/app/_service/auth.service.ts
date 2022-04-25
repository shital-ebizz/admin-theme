import { Injectable } from '@angular/core';
import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { map, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token = "Some token";

  public BaseUrl = environment.baseUrl;
  constructor(private http: HttpClient,
    private route: Router) { }

  login(data: any) {
    return this.http.post<any>(`${this.BaseUrl}login`, data)
      .pipe(
        map((result: any) => {
          return result;
        }),
      );
  }

  getAllUsers(page: number) {
    return this.http.get<any>(`${this.BaseUrl}users?page=${page}`)
  }


  getAllUser() {
    return this.http.get<any>(`${this.BaseUrl}users`)
  }

  postUser(data: any) {
    return this.http.post<any>(`${this.BaseUrl}users`, data)
      .pipe(map((res: any) => {
        return res;
      }));
  }
  updateUser(data: any, id: number) {
    return this.http.put<any>(`${this.BaseUrl}users/${id}` + id, data)
      .pipe(map((res: any) => {
        return res;
      }));

  }
  deleteUser(id: number) {
    return this.http.delete<any>(`${this.BaseUrl}user/${id}` + id)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  logout() {
    localStorage.removeItem('isLogged');      //after logout remove data from local storage
    localStorage.removeItem('userdata');      //remove stored token from lacal storage.
    this.route.navigate(['/login']);         //redirect to login page
  }

  get userDetails() {
    return localStorage.getItem("userdata") != null ? localStorage.getItem('userdata') : '';
  }

 

}
