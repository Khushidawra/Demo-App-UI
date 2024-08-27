import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { UserResponse } from '../user-response.model';
@Injectable({
  providedIn: 'root',
})
export class AppService {
  private apiUrl = environment.apiUrl;
  constructor(public http:HttpClient) { }
  login(email: string, password: string) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { email: email, password: password }; 
        //Calling API
    return this.http.post<UserResponse>(this.apiUrl+'login', body, {headers,responseType:'json',});
  }
  register(userName : string,email: string, password: string) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { email: email, password: password,userName:userName }; 
    //Calling API
    return this.http.post<UserResponse>(this.apiUrl+'register', body, {headers,responseType:"json",});
  }
}
