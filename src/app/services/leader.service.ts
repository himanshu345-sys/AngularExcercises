import { Injectable } from '@angular/core';
import { Leader } from 'src/shared/leader';
import { LEADERS } from 'src/shared/leaders';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  getLeaders() : Promise<Leader[]>
  {
    return new Promise(resolve =>{ 
      setTimeout(() => resolve(LEADERS),2000)
    });
  }

  getLeader(id:string): Promise<Leader>{
    return new Promise(resolve => {
      setTimeout(() => resolve(LEADERS.filter(l => l.id == id)[0]),2000)
      
    });
  }

  getFeaturedLeader():Promise<Leader>{
    return new Promise(resolve =>{
      setTimeout(() => resolve(LEADERS.filter(l => l.featured)[0]),2000)  
    });
  }

  constructor() { }
}
