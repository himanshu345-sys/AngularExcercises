import { Component, OnInit } from '@angular/core';
import { Dish } from 'src/shared/dish';
import { Leader } from 'src/shared/leader';
import { Promotion } from 'src/shared/promotion';
import { DishService } from '../services/dish.service';
import { LeaderService } from '../services/leader.service';
import { PromotionService } from '../services/promotion.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  dish:Dish;
  promotion:Promotion;
  leader:Leader;
  constructor(private dishService:DishService,private promotionService:PromotionService,private leaderService:LeaderService) { }

  ngOnInit() 
  {
    this.dishService.getFeaturedDish().then(dish => this.dish = dish);
    this.promotionService.getFeaturedPromotion().then(promotion => this.promotion = promotion);
    this.leaderService.getFeaturedLeader().then(leader => this.leader = leader);
  }

}
