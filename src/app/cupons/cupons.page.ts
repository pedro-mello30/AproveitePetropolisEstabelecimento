import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {CupomService} from './shared/cupons.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ToastService} from '../core/services/toast.service';
import {EstabelecimentoService} from '../estabelecimento/shared/estabelecimento.service';

@Component({
  selector: 'app-cupons',
  templateUrl: './cupons.page.html',
  styleUrls: ['./cupons.page.scss'],
})
export class CuponsPage implements OnInit {

  cupons;
  estabelecimentoKey: string;

  constructor(
    private estabelecimentoService: EstabelecimentoService,
    private cuponsService: CupomService,
    private toast: ToastService
  ) { }

  ngOnInit() {
    this.estabelecimentoKey = this.estabelecimentoService.getEstalebelicimentoKey();
    const cuponsSub = this.cuponsService.getByField('estabelecimentoKey', this.estabelecimentoKey).subscribe((cupons) => {
      cuponsSub.unsubscribe();
      this.cupons = cupons;
    });
  }


}
