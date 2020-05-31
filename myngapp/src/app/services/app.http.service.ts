import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, from} from 'rxjs';
import { Product } from './../models/app.product.model';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private url: string;
  // inject the HttpClient to the class
  // The HttpClient object will be resolved
  // using HttpClientModule class imported in @NgModule
  constructor(private http: HttpClient){
    this.url = 'https://apiapptrainingnewapp.azurewebsites.net/api/Products';
  }
  getData(): Observable<Product[]> {
     let response: Observable<Product[]> = null;
     response = this.http.get<Product[]>(this.url);
     return response;
  }

  postData(prd: Product): Observable<Product> {
    let response: Observable<Product> = null;
    // define headers
    const options = {
        headers: new HttpHeaders({
          'Content-Type' : 'application/json'
        })
    };
    response = this.http.post<Product>(this.url, prd, options);
    return response;
  }
  putData(prd: Product): Observable<Product> {
    let response: Observable<Product> = null;
    // define headers
    const options = {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json'
      })
  };
    // pass ProductRowId in Request header
    response = this.http.put<Product>(`${this.url}/${prd.ProductRowId}`, prd, options);
    return response;
  }
  deleteData(id: number): Observable<Product> {
    let response: Observable<Product> = null;
     // pass ProductRowId in Request header
    response = this.http.delete<Product>(`${this.url}/${id}`);
    return response;
  }
}
