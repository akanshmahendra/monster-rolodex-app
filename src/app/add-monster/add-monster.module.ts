import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AddMonsterRoutingModule } from './add-monster-routing.module';
import { AddMonsterComponent } from './add-monster.component';


@NgModule({
  declarations: [
    AddMonsterComponent
  ],
  imports: [
    CommonModule,
    AddMonsterRoutingModule,
    ReactiveFormsModule
  ]
})
export class AddMonsterModule { }
