import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GerenciarPageRoutingModule } from './gerenciar-routing.module';

import { GerenciarPage } from './gerenciar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GerenciarPageRoutingModule
  ],
  declarations: [GerenciarPage]
})
export class GerenciarPageModule {}
