import { Injectable } from '@angular/core';
import { Dish } from 'src/shared/dish';
import { DISHES } from 'src/shared/dishes';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  getDishes() : Promise<Dish[]>
  {
    return Promise.resolve(DISHES);
  }

  getDish(id:string): Promise<Dish>{
    return Promise.resolve( DISHES.filter((dish) => (dish.id === id))[0]);
  }

  getFeaturedDish(): Promise<Dish>{
    return Promise.resolve(DISHES.filter((dish) => dish.featured)[0]);
  }

  constructor() { }
}
