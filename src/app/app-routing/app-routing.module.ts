import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { MenuComponent } from '../menu/menu.component';
import { ContactComponent } from '../contact/contact.component';
import { DishdetailComponent } from '../dishdetail/dishdetail.component';


export const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'menu',component:MenuComponent},
  {path:'contact',component:ContactComponent},
  {path:'dishdetail/:id',component:DishdetailComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
