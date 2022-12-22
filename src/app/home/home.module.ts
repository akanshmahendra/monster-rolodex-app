import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MonsterCardComponent } from './components/monster-card/monster-card.component';


@NgModule({
  declarations: [
    HomeComponent,
    MonsterCardComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
