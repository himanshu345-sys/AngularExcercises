import { Component, OnInit } from '@angular/core';
import { Dish } from 'src/shared/dish';
import { DISHES } from 'src/shared/dishes';
import { DishService } from '../services/dish.service';




 @Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {

  dishes: Dish[] = DISHES;

  constructor(private dishService: DishService) { }

  ngOnInit() 
  {
    this.dishes = this.dishService.getDishes();
  }

}
