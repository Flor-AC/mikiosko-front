import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

class Costumers {
  id: bigint;
  username: string;
  name: string;
  latname: string;
  age: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  apiURL = 'https://mikiosko.herokuapp.com/api';

  constructor(private http: HttpClient) {

  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Accept: 'application/json'
    })
  };

  /*Costumer*/
  update(costumers: Costumers): Observable<Costumers> {
    // tslint:disable-next-line:max-line-length
    return this.http.put<Costumers>(this.apiURL + '/costumers', costumers, this.httpOptions).pipe(retry(1), catchError(this.handleError));
  }

  delete(id) {
    return this.http.delete<Costumers>(this.apiURL + '/costumers/' + id, this.httpOptions).pipe(retry(1), catchError(this.handleError));
  }

  create(costumers: Costumers): Observable<Costumers> {
    // tslint:disable-next-line:max-line-length
    return this.http.post<Costumers>(this.apiURL + '/costumers', costumers, this.httpOptions).pipe(retry(1), catchError(this.handleError));
  }

  getAll() {
    return this.http.get<Costumers>(this.apiURL + '/costumers', this.httpOptions).pipe(retry(1), catchError(this.handleError));
  }

  handleError(error) {
    let errorMessage;

    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }

    console.log( 'Algo ha salido mal, por favor intentalo más tarde');

    return throwError(errorMessage);
  }

  get(id): Observable<Costumers> {
    return this.http.get<Costumers>(this.apiURL + '/costumers' + id, this.httpOptions).pipe(retry(1), catchError(this.handleError));
  }
}
