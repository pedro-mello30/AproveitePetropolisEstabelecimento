import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'cupons',
        loadChildren: () => import('../cupons/cupons.module').then( m => m.CuponsPageModule)
      },
      {
        path: 'perfil-estabelecimento',
        loadChildren: () => import('../perfil-estabelecimento/perfil-estabelecimento.module').then( m => m.PerfilEstabelecimentoPageModule)
      },
      {
        path: 'estabelecimento/editar/:key',
        loadChildren: () => import('../estabelecimento/estabelecimentos-form/estabelecimentos-form.module').then( m => m.EstabelecimentosFormPageModule)
      },
      {
        path: 'equipe',
        loadChildren: () => import('../equipe/equipe.module').then( m => m.EquipePageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
