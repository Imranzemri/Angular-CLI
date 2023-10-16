import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://localhost:7196/api/Shipment'; 
   qrs:any;
  constructor(private http: HttpClient) {}

  // postFormData(data: any): Observable<string> {
  //   // return this.http.post(this.apiUrl, data, { responseType: 'text' });
  //   return this.http.post<string[]>(this.apiUrl, data);
  // }

  postFormData(data: any): Observable<string[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post<string[]>(this.apiUrl, data, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }
  private handleError(error: any) {
    // You can handle errors as per your application's requirements.
    console.error('An error occurred:', error);
    return throwError('Something went wrong. Please try again later.');
  }
}
