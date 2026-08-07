import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Api {

  constructor(private http: HttpClient) { }

  getProduct() {
    return this.http.get('https://dummyjson.com/products')
  }

  makePostRequest(requestName: String, rawBody: any) {
    const url = `${environment.baseURL}${requestName}`;
    return this.http.post<any>(url, rawBody).pipe(
      map((response: any) => response),
      catchError((err) => {
        console.error(err);
        return throwError(() => err);
      })
    );
  }
}
