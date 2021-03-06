import { Component, Inject, OnInit } from '@angular/core';
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
  constructor(private dishService:DishService,
    private promotionService:PromotionService,
    private leaderService:LeaderService,
    @Inject('BaseURL') private BaseURL
    ) { }

  ngOnInit() 
  {
    this.dishService.getFeaturedDish().subscribe(dish => this.dish = dish);
    this.promotionService.getFeaturedPromotion().subscribe(promotion => this.promotion = promotion);
    this.leaderService.getFeaturedLeader().subscribe(leader => this.leader = leader);
  }

}
