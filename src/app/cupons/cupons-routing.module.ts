import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CuponsPage } from './cupons.page';

const routes: Routes = [
  {
    path: '',
    component: CuponsPage
  },
  {
    path: 'adicionar',
    loadChildren: () => import('./adicionar/adicionar.module').then( m => m.AdicionarPageModule)
  },
  {
    path: 'adicionar/:key',
    loadChildren: () => import('./adicionar/adicionar.module').then( m => m.AdicionarPageModule)
  },
  {
    path: 'gerenciar',
    loadChildren: () => import('./gerenciar/gerenciar.module').then( m => m.GerenciarPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CuponsPageRoutingModule {}
