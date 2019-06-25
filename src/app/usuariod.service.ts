import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const endpoint = 'https://api.github.com/users/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
@Injectable(
  //{
  //providedIn: 'root'
  //}
)
export class UsuariodService {
  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  getDetalleUsuario(nameUsuario?: string): Observable<any> {
    return this.http.get(endpoint + nameUsuario).pipe(
      map(this.extractData));

  }

}
