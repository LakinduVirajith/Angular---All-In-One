import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class HTTPService {
  private getAllProductUrl = environment.apiUrl + 'product/get-all';
  private getByIdProductUrl = environment.apiUrl + 'product/get-by-id';
  private createProductUrl = environment.apiUrl + 'product/create';
  private updateProductUrl = environment.apiUrl + 'product/update';
  private deleteProductUrl = environment.apiUrl + 'product/delete';

  constructor(private http: HttpClient) {}

  /* GET ALL REQUEST */
  getAllData(): Observable<any> {
    return this.http.get(this.getAllProductUrl).pipe(catchError(this.handleError));
  }

  /* GET REQUEST */
  getData(productId: number): Observable<any> {
    const params = new HttpParams().append('id', productId);
    return this.http.get(this.getByIdProductUrl, { params }).pipe(catchError(this.handleError));
  }

  /* POST REQUEST */
  postData(body: any): Observable<any> {
    return this.http.post(this.createProductUrl, body).pipe(catchError(this.handleError));
  }

  /* PUT REQUEST */
  putData(productId: number, body: any): Observable<any> {
    const params = new HttpParams().append('id', productId);
    return this.http.put(this.updateProductUrl, body, { params }).pipe(catchError(this.handleError));
  }

  /* DELETE REQUEST */
  deleteData(productId: string): Observable<any> {
    const params = new HttpParams().append('id', productId);
    return this.http.delete(this.deleteProductUrl,  { params }).pipe(catchError(this.handleError));
  }

  /* HELPER METHOD TO HANDLE ERRORS */
  private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError(() => new Error('Something went wrong, please try again later.'));
  }
}
