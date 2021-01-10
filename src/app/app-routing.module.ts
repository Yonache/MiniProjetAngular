import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameComponent } from './game/game.component';
import {AddGameComponent} from './add-game/add-game.component';
import {UpdateGameComponent} from './update-game/update-game.component';

const routes: Routes = [
  {path: 'game', component : GameComponent},
  {path: 'add-game', component : AddGameComponent},
  { path: '', redirectTo: 'game', pathMatch: 'full' },
  {path: 'updateGame/:id', component: UpdateGameComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
