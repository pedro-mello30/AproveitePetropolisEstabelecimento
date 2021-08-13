import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstabelecimentosFormPage } from './estabelecimentos-form.page';

const routes: Routes = [
  {
    path: '',
    component: EstabelecimentosFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstabelecimentosFormPageRoutingModule {}
