import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map, retry } from 'rxjs/operators';
import { Game } from 'src/model/game';
import { puts } from 'util';


@Injectable({
  providedIn: 'root'
})


export class ApiService {
  

  apiUrl = 'http://localhost:8000/';

  constructor(private http: HttpClient) { 
  }

  // createAuthorizationHeader(headers: Headers) {
  //   headers.append('Authorization', 'Basic ' +
  //     btoa('username:password')); 
  // }

  
  
  getGames(): Observable<Game[]>{
    return this.http.get<Game[]>(this.apiUrl + 'games/')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  addGame (game): Observable<Game> {
    return this.http.post<Game>(this.apiUrl+ 'games/', game).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      retry(1),
      catchError(this.handleError)
    );
  }

  getGame(id): Observable<Game> {
    return this.http.get<Game>(this.apiUrl + 'games/' + id +'/')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  deleteGame(id){
    return this.http.delete<Game>(this.apiUrl + 'games/' + id + '/')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  
  handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
 }



  // updateGame(id, game): Observable<any> {
  //   const url = `${this.apiUrl}/${id}`;
  //   return this.http.put(url, game, httpOptions).pipe(
  //     tap(_ => console.log(`atualiza o game com id=${id}`)),
  //     catchError(this.handleError<any>('updateGame'))
  //   );
  // }

  // deleteGame (id): Observable<Game> {
  //   const url = `${this.apiUrl}/delete/${id}`;

  //   return this.http.delete<Game>(url, httpOptions).pipe(
  //     tap(_ => console.log(`remove o game com id=${id}`)),
  //     catchError(this.handleError<Game>('deleteGame'))
  //   );
  // }

  // private handleError<T> (operation = 'operation', result?: T) {
  //   return (error: any): Observable<T> => {

  //     console.error(error);

  //     return of(result as T);
  //   };
  // }
}
