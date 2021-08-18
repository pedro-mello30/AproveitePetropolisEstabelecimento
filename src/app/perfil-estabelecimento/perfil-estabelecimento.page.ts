import { Component, OnInit } from '@angular/core';
import {UsuarioAuthService} from '../login/shared/usuario-auth.service';
import {Router} from '@angular/router';
import {EstabelecimentoService} from '../estabelecimento/shared/estabelecimento.service';

@Component({
  selector: 'app-perfil-estabelecimento',
  templateUrl: './perfil-estabelecimento.page.html',
  styleUrls: ['./perfil-estabelecimento.page.scss'],
})
export class PerfilEstabelecimentoPage implements OnInit {

  usuario;
  estabelecimentoKey;

  constructor(
    private usuarioAuthService: UsuarioAuthService,
    private estabelecimentoService: EstabelecimentoService,
    private router: Router
  )
  { }

  ngOnInit() {
    this.usuario = this.usuarioAuthService.getUser();
    this.estabelecimentoKey = this.estabelecimentoService.getEstalebelicimentoKey();
    console.log(this.usuario);
  }

  uploadImg(event: any){
    if (event.target.files.length) {
      this.usuarioAuthService.uploadImg(event.target.files[0])
      const reader = new FileReader();
      reader.onload = () => {
        this.usuario.photoUrl = reader.result.toString();
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  doRefresh(event) {
    location.reload();
    // this.ngOnInit();
    // setTimeout(() => {
    //   // console.log('Async operation has ended');
    //   event.target.complete();
    // }, 2000);
  }

  redirectMeusEstab(){
    this.estabelecimentoService.setEstalebelicimentoKey('');
    this.router.navigate(['/estabelecimento']);
  }

  logout(){
    this.usuarioAuthService.logout()
      .then(() => {
        this.router.navigate(['/login']);
      });
  }

}
