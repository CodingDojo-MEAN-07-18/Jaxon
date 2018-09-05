import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BattleComponent } from './battle/battle.component';
import { RankingComponent } from './ranking/ranking.component';
import { ResultComponent } from './result/result.component';

const routes: Routes = [
  { path: 'battle', component: BattleComponent },
  { path: 'battle/result', component: ResultComponent },
  { path: 'ranking', component: RankingComponent },
  { path: '', pathMatch: 'full', redirectTo: 'battle' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
