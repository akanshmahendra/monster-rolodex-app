import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MonsterDetailsRoutingModule } from './monster-details-routing.module';
import { MonsterDetailsComponent } from './monster-details.component';


@NgModule({
  declarations: [
    MonsterDetailsComponent
  ],
  imports: [
    CommonModule,
    MonsterDetailsRoutingModule
  ]
})
export class MonsterDetailsModule { }
