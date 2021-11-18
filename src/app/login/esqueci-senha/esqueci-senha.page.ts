import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UsuarioAuthService} from '../shared/usuario-auth.service';
import {ToastService} from '../../core/services/toast.service';

@Component({
  selector: 'app-esqueci-senha',
  templateUrl: './esqueci-senha.page.html',
  styleUrls: ['./esqueci-senha.page.scss'],
})
export class EsqueciSenhaPage implements OnInit {

  formEsqueciSenha: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private usuarioAuthService: UsuarioAuthService,
    private toast: ToastService
  ) { }

  ngOnInit() {
    this.criarFormulario();
  }

  get email() { return this.formEsqueciSenha.get('email'); }

  criarFormulario(){
    this.formEsqueciSenha = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit(){
    if (this.formEsqueciSenha.valid) {
      this.usuarioAuthService.enviarEmailResetarSenha(this.formEsqueciSenha.value.email)
        .then(() => {
          this.toast.showSuccess('E-mail enviado com sucesso');
        })
        .catch((mensagem: string) => {
          this.toast.showError(mensagem);
        });
    }
  }
}
