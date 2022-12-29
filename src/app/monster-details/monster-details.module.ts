import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MonsterDetailsRoutingModule } from './monster-details-routing.module';
import { MonsterDetailsComponent } from './monster-details.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    MonsterDetailsComponent
  ],
  imports: [
    CommonModule,
    MonsterDetailsRoutingModule,
    SharedModule
  ]
})
export class MonsterDetailsModule { }
