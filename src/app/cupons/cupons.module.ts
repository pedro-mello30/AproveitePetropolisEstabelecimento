import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CuponsPageRoutingModule } from './cupons-routing.module';

import { CuponsPage } from './cupons.page';
import {ValidacaoCupomComponent} from './validacao-cupom/validacao-cupom.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CuponsPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CuponsPage, ValidacaoCupomComponent],
  exports: [ValidacaoCupomComponent]
})
export class CuponsPageModule {}
