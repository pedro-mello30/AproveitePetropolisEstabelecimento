import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GerenciarPage } from './gerenciar.page';

const routes: Routes = [
  {
    path: '',
    component: GerenciarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GerenciarPageRoutingModule {}
