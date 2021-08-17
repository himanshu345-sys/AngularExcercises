import { Injectable } from '@angular/core';
import { Dish } from 'src/shared/dish';
import { DISHES } from 'src/shared/dishes';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  getDishes() : Dish[]
  {
    return DISHES;
  }

  getDish(id:string): Dish{
    return DISHES.filter((dish) => dish.id == id)[0];
  }

  getFeaturedDish():Dish{
    return DISHES.filter((dish) => dish.featured)[0];
  }

  constructor() { }
}
