import { Injectable } from '@angular/core';
import { Leader } from 'src/shared/leader';
import { LEADERS } from 'src/shared/leaders';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  getLeaders() : Leader[]
  {
    return LEADERS;
  }

  getLeader(id:string): Leader{
    return LEADERS.filter(l => l.id == id)[0];
  }

  getFeaturedLeader():Leader{
    return LEADERS.filter(l => l.featured)[0];
  }

  constructor() { }
}
