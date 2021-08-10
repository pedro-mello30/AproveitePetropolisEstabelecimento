import { Component, OnInit } from '@angular/core';
import {ToastService} from "../../core/services/toast.service";
import {Router} from "@angular/router";
import {AlertService} from "../../core/services/alert.service";
import {UsuarioAuthService} from "../shared/usuario-auth.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  formCriarConta: FormGroup;

  constructor(
    private formBuilder: FormBuilder, private usuarioService: UsuarioAuthService,
    private router: Router, private toast: ToastService) { }

  ngOnInit() {
    this.criarFormulario();
  }

  get nome() { return this.formCriarConta.get('nome'); }
  get email() { return this.formCriarConta.get('email'); }
  get telefone() { return this.formCriarConta.get('telefone'); }
  get senha() { return this.formCriarConta.get('senha'); }

  criarFormulario() {
    this.formCriarConta = this.formBuilder.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', Validators.required],
      senha: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.formCriarConta.valid) {
      this.usuarioService.criarConta(this.formCriarConta.value)
        .then(() => {
          this.toast.showSuccess('Sua conta foi criada com sucesso.');
          this.router.navigate(['/login']);
        })
        .catch((mensagem: string) => {
          this.toast.showError(mensagem);
        });
    }
  }


}
