import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddMonsterRoutingModule } from './add-monster-routing.module';
import { AddMonsterComponent } from './add-monster.component';


@NgModule({
  declarations: [
    AddMonsterComponent
  ],
  imports: [
    CommonModule,
    AddMonsterRoutingModule
  ]
})
export class AddMonsterModule { }
