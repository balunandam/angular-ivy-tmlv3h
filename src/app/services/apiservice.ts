import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, pipe, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  // getWeather(location) {
  //   debugger;
  //   return this.http.get(
  //     `https://api.openweathermap.org/data/2.5/weather?APPID=eb03b1f5e5afb5f4a4edb40c1ef2f534&q=${location}`
  //   );
  // }

  public getWeather(data): Observable<any> {
    debugger;
    return this.http
      .get(
        `https://api.openweathermap.org/data/2.5/weather?APPID=eb03b1f5e5afb5f4a4edb40c1ef2f534&q=${location}`
      )
      .pipe(
        map((events) => {
          return events;
        }),
        catchError(this.handleError)
      );
  }
  public handleError(error: Response) {
    return throwError(error);
  }
}
