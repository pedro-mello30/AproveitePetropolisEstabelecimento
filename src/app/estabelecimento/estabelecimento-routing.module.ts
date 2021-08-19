import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstabelecimentoPage } from './estabelecimento.page';

const routes: Routes = [
  {
    path: '',
    component: EstabelecimentoPage
  },
  {
    path: 'adicionar',
    loadChildren: () => import('./estabelecimentos-form/estabelecimentos-form.module').then( m => m.EstabelecimentosFormPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstabelecimentoPageRoutingModule {}
