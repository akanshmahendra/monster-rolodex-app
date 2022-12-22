import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'details/:id', loadChildren: () => import('./monster-details/monster-details.module').then(m => m.MonsterDetailsModule) },
  { path: 'add', loadChildren: () => import('./add-monster/add-monster.module').then(m => m.AddMonsterModule) },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
