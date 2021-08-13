import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EstabelecimentoService} from '../../estabelecimento/shared/estabelecimento.service';
import {CupomService} from '../shared/cupons.service';
import {ToastService} from '../../core/services/toast.service';

@Component({
  selector: 'app-validacao-cupom',
  templateUrl: './validacao-cupom.component.html',
  styleUrls: ['./validacao-cupom.component.scss'],
})
export class ValidacaoCupomComponent implements OnInit {

  cupons;
  form: FormGroup;
  estabelecimentoKey: string;

  constructor(
    private estabelecimentoService: EstabelecimentoService,
    private cuponsService: CupomService,
    private formBuilder: FormBuilder,
    private toast: ToastService
  ) { }

  ngOnInit() {
    this.criarFormulario();
    this.estabelecimentoKey = this.estabelecimentoService.getEstalebelicimentoKey();
  }

  onSubmit(){
    const update = this.cuponsService.validateCupom(this.estabelecimentoKey, this.form.get('token').value);
    this.toast.showSuccess("Cupom válidado com sucesso.");

  }

  criarFormulario(){
    this.form = this.formBuilder.group({
      token: ['', Validators.required],
    });
  }
}
