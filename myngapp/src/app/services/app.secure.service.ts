import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseData, RegisterUser, LoginUser, ProductResponse } from '../models/app.users.model';

@Injectable({
  providedIn: 'root'
})
export class SecureService {

  constructor(private http: HttpClient) { }

  createUser(user: RegisterUser): Observable<ResponseData> {
    let response: Observable<ResponseData> = null;
    response = this.http.post<ResponseData>(
      'http://localhost:5000/api/Auth/Register',
      user,
      {
        headers: new HttpHeaders({
          'Content-Type' : 'application/json'
        })
      }
    );
    return response;
  }

  loginUser(user: LoginUser): Observable<ResponseData> {
    let response: Observable<ResponseData> = null;
    response = this.http.post<ResponseData>(
      'http://localhost:5000/api/Auth/Login',
      user,
      {
        headers: new HttpHeaders({
          'Content-Type' : 'application/json'
        })
      }
    );
    return response;
  }

  getData(token: string): Observable<ProductResponse[]> {
      let response: Observable<ProductResponse[]> = null;
      response = this.http.get<ProductResponse[]>(
        'http://localhost:5000/api/Products',
        {
          headers: new HttpHeaders({
            AUTHORIZATION: `Bearer ${token}`
          })
        }
      );
      return response;
  }

}
