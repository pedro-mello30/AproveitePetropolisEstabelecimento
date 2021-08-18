import { Component, OnInit } from '@angular/core';
import {UsuarioAuthService} from "./shared/usuario-auth.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ToastService} from "../core/services/toast.service";
import {Router} from "@angular/router";
import {EstabelecimentoService} from '../estabelecimento/shared/estabelecimento.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formLogin: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioAuthService,
    private estabelecimentoService: EstabelecimentoService,
    private router: Router,
    private toast: ToastService
  ) { }

  ngOnInit() {
    this.criarFormulario();
  }

  get email() { return this.formLogin.get('email'); }
  get senha() { return this.formLogin.get('senha'); }

  criarFormulario() {
    this.formLogin = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required]],
    });
  }

  onSubmit(){
    if (this.formLogin.valid){
      this.usuarioService.login(this.formLogin.value.email, this.formLogin.value.senha)
        .then(() => {
          this.router.navigate(['/estabelecimento']);
        })
        .catch((mensagem: string) => {
          this.toast.showError(mensagem);
        });
    }
  }

}
