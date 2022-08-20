import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserSignUp } from '../models/signuppage';

@Injectable({
  providedIn: 'root'
})
export class signupService{

  baseUrl = 'https://localhost:7030/User';

  constructor(private http: HttpClient) { }

  //Add User
  User(usersignup : UserSignUp):Observable<UserSignUp[]>{
      return this.http.post<UserSignUp[]>(this.baseUrl, usersignup);
  }

}
