import { Injectable } from '@angular/core';
import { Dish } from 'src/shared/dish';
import { Observable } from 'rxjs';
import { catchError, delay, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseURL } from 'src/shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor(private httpClient: HttpClient, private errorService: ProcessHTTPMsgService) { }

  getDishes() : Observable<Dish[]>
  {
    return this.httpClient.get<Dish[]>(baseURL + 'dishes')
      .pipe(catchError(this.errorService.handleError));
  }

  getDish(id:string): Observable<Dish>{
    return this.httpClient.get<Dish>(baseURL + 'dishes/' + id)
      .pipe(catchError(this.errorService.handleError));
  }

  getFeaturedDish(): Observable<Dish>{
    return this.httpClient.get<Dish[]>(baseURL + 'dishes?featured=true')
      .pipe(map(dishes => dishes[0]),delay(1000))
      .pipe(catchError(this.errorService.handleError));
  }

  getDishIds(): Observable<string[] | any>{
    return this.getDishes().pipe(map(dishes => dishes.map(dish => dish.id)))
      .pipe(catchError(error => error));
  }

  putDish(dish: Dish): Observable<Dish> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.httpClient.put<Dish>(baseURL + 'dishes/' + dish.id, dish, httpOptions)
      .pipe(catchError(this.errorService.handleError));

  }
}
