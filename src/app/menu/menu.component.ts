import { Component, Inject, OnInit } from '@angular/core';
import { Dish } from 'src/shared/dish';
import { DishService } from '../services/dish.service';




 @Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {

  dishes: Dish[];
  errmsg:string;

  constructor(private dishService: DishService, @Inject('BaseURL') private BaseURL) { }

  ngOnInit() 
  {
    this.dishService.getDishes().subscribe(dishes => this.dishes = dishes, errMsg => this.errmsg = <any>errMsg);
  }

}
