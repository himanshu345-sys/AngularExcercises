import { Injectable } from '@angular/core';
import { Leader } from 'src/shared/leader';
import { LEADERS } from 'src/shared/leaders';
import { Observable,of } from 'rxjs';
import { delay } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  getLeaders() : Observable<Leader[]>
  {
    return of(LEADERS).pipe(delay(2000));
  }

  getLeader(id:string): Observable<Leader>{
    return of(LEADERS.filter(l => l.id == id)[0]).pipe(delay(2000));
  }

  getFeaturedLeader():Observable<Leader>{
    return of(LEADERS.filter(l => l.featured)[0]).pipe(delay(2000));
  }

  constructor() { }
}
