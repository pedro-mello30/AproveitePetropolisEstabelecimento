import { Component, OnInit } from '@angular/core';
import {EstabelecimentoService} from '../estabelecimento/shared/estabelecimento.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  estabelecimento: any;

  constructor(
    private estabelecimentoService: EstabelecimentoService
  ) { }

  ngOnInit() {
    this.carregarDados();
  }

  async carregarDados(){
    const key = '-MafQrPR4t4_2Ccq_KCw';
    const estabelecimentoSub = await this.estabelecimentoService.getByKey(key).subscribe((estabelecimento) => {
      estabelecimentoSub.unsubscribe();
      this.estabelecimento = estabelecimento;
    });
  }

}
