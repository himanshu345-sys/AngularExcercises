import { Injectable } from '@angular/core';
import { Leader } from 'src/shared/leader';
import { LEADERS } from 'src/shared/leaders';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  getLeaders() : Promise<Leader[]>
  {
    return Promise.resolve(LEADERS);
  }

  getLeader(id:string): Promise<Leader>{
    return Promise.resolve(LEADERS.filter(l => l.id == id)[0]);
  }

  getFeaturedLeader():Promise<Leader>{
    return Promise.resolve(LEADERS.filter(l => l.featured)[0]);
  }

  constructor() { }
}
