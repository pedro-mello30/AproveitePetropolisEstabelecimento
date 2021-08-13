import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {EstabelecimentoService} from './shared/estabelecimento.service';
import {ToastService} from '../core/services/toast.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-estabelecimento',
  templateUrl: './estabelecimento.page.html',
  styleUrls: ['./estabelecimento.page.scss'],
})
export class EstabelecimentoPage implements OnInit {

  estabelecimentos: Observable<any[]>;

  constructor(
    private estabelecimentoService: EstabelecimentoService,
    private router: Router,
    private toast: ToastService
  ) { }

  ngOnInit() {
    this.estabelecimentos = this.estabelecimentoService.getAll();
  }

  gerenciarEstabelecimento(estabelecimentoKey: string){
    this.estabelecimentoService.setEstalebelicimentoKey(estabelecimentoKey);
    this.router.navigate(['/tabs/home']);
  }

}
