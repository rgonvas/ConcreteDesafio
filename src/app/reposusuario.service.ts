import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Repos } from './classes/repos';

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
export class ReposusuarioService {
  public repos: Array<Repos> = [];
  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  getReposUsuarioMap(nameUsuario?: string): Observable<any> {
    console.debug('ENTRANDO AL SERVICIO DE REPOS USUARIO RUTA: ' + endpoint + nameUsuario + '/repos');
    return this.http.get(endpoint + nameUsuario + '/repos').pipe(
      map(this.extractData));
  }

  getReposUsuario(nameUsuario?: string) {
    this.repos = [];
    this.http.get(endpoint + nameUsuario + '/repos').subscribe((data: any[]) => {
      this.repos = [];
      data.forEach(result => {
        this.repos.push(new Repos(
          result.name,
          result.description,
          result.stargazers_count
        ));
      }
     }
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }
}