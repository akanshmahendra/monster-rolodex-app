import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMonsterComponent } from './add-monster.component';

const routes: Routes = [{ path: '', component: AddMonsterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddMonsterRoutingModule { }
