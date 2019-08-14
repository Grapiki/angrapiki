import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:8888/grapiki/api';

  
  public getUsers(): Observable<any> {
    //return this.http.get(`${this.url}/users`).map(res => res);
    return this.http.get<any>(this.url+'/users')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
    //.pipe(map((res: any) => {
    //  console.log('res', res);
    //  return res;
    //}));
  }

  // Error handling 
  handleError(error: HttpErrorResponse) {
    /*let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);*/
    return observableThrowError(error.message || "Erreur du serveur");
 }
}
