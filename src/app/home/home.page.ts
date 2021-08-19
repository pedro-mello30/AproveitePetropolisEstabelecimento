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
    this.load();
  }

  async carregarDados(){
    const key = this.estabelecimentoService.getEstalebelicimentoKey();
    const estabelecimentoSub = await this.estabelecimentoService.getByKey(key).subscribe((estabelecimento) => {
      estabelecimentoSub.unsubscribe();
      this.estabelecimento = estabelecimento;
    });
  }

  load() {
    //Session storage salva os dados como string
    (sessionStorage.refresh == 'true' || !sessionStorage.refresh) && location.reload();
    sessionStorage.refresh = false;
  }

  doRefresh(event) {
    location.reload();
    // this.ngOnInit();
    // setTimeout(() => {
    //   // console.log('Async operation has ended');
    //   event.target.complete();
    // }, 2000);
  }

}
