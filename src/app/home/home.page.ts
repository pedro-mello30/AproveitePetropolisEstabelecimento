import { Component, OnInit } from '@angular/core';
import {EstabelecimentoService} from '../estabelecimento/shared/estabelecimento.service';
import {Observable} from 'rxjs';
import {UsuarioAuthService} from '../login/shared/usuario-auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  estabelecimento: any;

  constructor(
    private estabelecimentoService: EstabelecimentoService,
  ) { }

  ngOnInit() {
    this.carregarDados();
  }

  async carregarDados(){
    const key = this.estabelecimentoService.getEstalebelicimentoKey();
    const estabelecimentoSub = await this.estabelecimentoService.getByKey(key).subscribe((estabelecimento) => {
      estabelecimentoSub.unsubscribe();
      this.estabelecimento = estabelecimento;
    });
  }

}
