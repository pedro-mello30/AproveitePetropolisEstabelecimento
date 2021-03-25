import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilEstabelecimentoPage } from './perfil-estabelecimento.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilEstabelecimentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilEstabelecimentoPageRoutingModule {}
