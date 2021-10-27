import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilEstabelecimentoPage } from './perfil-estabelecimento.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilEstabelecimentoPage,
  },
  {
    path: 'estabelecimento/editar/:key',
    loadChildren: () => import('../estabelecimento/estabelecimentos-form/estabelecimentos-form.module').then( m => m.EstabelecimentosFormPageModule)
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilEstabelecimentoPageRoutingModule {}
