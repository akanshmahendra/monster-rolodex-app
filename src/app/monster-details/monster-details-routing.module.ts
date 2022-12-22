import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonsterDetailsComponent } from './monster-details.component';

const routes: Routes = [{ path: '', component: MonsterDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MonsterDetailsRoutingModule { }
