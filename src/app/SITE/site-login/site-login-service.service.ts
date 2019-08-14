import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { MyServiceService } from 'src/app/my-service.service';

@Injectable({
  providedIn: 'root'
})
export class SiteLoginServiceService {

  constructor(private http: HttpClient, private myServ: MyServiceService) { 
    
  }
  url = 'http://localhost:8888/grapiki/api/users';

  public getUserById(id): Observable<any> {
    //return this.http.get(`${this.url}/users`).map(res => res);
    return this.http.get<any>(this.url+'/'+id)
    .pipe(
      retry(1),
      catchError(this.myServ.handleError)
    )
  }

  public getUserByEmail(email): Observable<any> {
    //return this.http.get(`${this.url}/users`).map(res => res);
    return this.http.get<any>(this.url+'/email/'+email)
    .pipe(
      retry(1),
      catchError(this.myServ.handleError)
    )
  }

}
