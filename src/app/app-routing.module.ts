import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GamesComponent } from './games/games.component';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { GameNewComponent } from './game-new/game-new.component';
import { GameEditComponent } from './game-edit/game-edit.component';

const routes: Routes = [

{
  path: 'games',
  component: GamesComponent,
  data: {
    title: 'Lista de Games'
  }
},
{
  path: 'game-detail/:id',
  component: GameDetailComponent,
  data:{
    title: 'Detalhe do Game'
  }
},
{
  path: 'game-new',
  component: GameNewComponent,
  data:{
    title: 'Adicionar Game'
  }
},
{
  path: 'game-edit',
  component: GameEditComponent,
  data:{
    title: 'Editar Game'
  }
},  
{
  path:'',
  redirectTo: '/games',
  pathMatch: 'full'
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
