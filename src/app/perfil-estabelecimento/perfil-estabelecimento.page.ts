import { Component, OnInit } from '@angular/core';
import {UsuarioAuthService} from '../login/shared/usuario-auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-perfil-estabelecimento',
  templateUrl: './perfil-estabelecimento.page.html',
  styleUrls: ['./perfil-estabelecimento.page.scss'],
})
export class PerfilEstabelecimentoPage implements OnInit {

  constructor(
    private usuarioAuthService: UsuarioAuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  logout(){
    this.usuarioAuthService.logout()
      .then(() => {
        this.router.navigate(['/login']);
      });
  }

}
