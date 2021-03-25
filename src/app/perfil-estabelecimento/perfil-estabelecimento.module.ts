import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilEstabelecimentoPageRoutingModule } from './perfil-estabelecimento-routing.module';

import { PerfilEstabelecimentoPage } from './perfil-estabelecimento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilEstabelecimentoPageRoutingModule
  ],
  declarations: [PerfilEstabelecimentoPage]
})
export class PerfilEstabelecimentoPageModule {}
