import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ListComponent } from './manager/list/list.component';
import { GameComponent } from './manager/game/game.component';
import { AddComponent } from './manager/add/add.component';

const routes: Routes = [
  { path: 'players/list', component: ListComponent },
  { path: 'players/addplayer', component: AddComponent },
  { path: 'status/game/:num', component: GameComponent },
  { path: '', pathMatch: 'full', redirectTo: '/players/list' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
