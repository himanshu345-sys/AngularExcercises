import { Injectable } from '@angular/core';
import { Dish } from 'src/shared/dish';
import { DISHES } from 'src/shared/dishes';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  getDishes() : Dish[]{
    return DISHES;
  }

  constructor() { }
}
