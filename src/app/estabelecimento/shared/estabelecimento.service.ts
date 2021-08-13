import { Injectable } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {AngularFireStorage} from '@angular/fire/storage';
import {FirebasePath} from '../../core/shared/firebase-path';
import {map} from 'rxjs/operators';
import {UsuarioAuthService} from '../../login/shared/usuario-auth.service';

@Injectable({
  providedIn: 'root'
})
export class EstabelecimentoService {

  proprietariosUid: string;
  proprietariosEmail: string;

  constructor(
    private db: AngularFireDatabase,
    private storage: AngularFireStorage,
    private usuarioService: UsuarioAuthService
  ) {

    console.log(this.usuarioService.getUser());
    const user = this.usuarioService.getUser();
    console.log(user);
    // this.proprietariosUid = user.uid;
    // this.proprietariosEmail = user.email;
    this.loadUser();
  }


  async loadUser(){
    const user = this.usuarioService.getUser();
    this.proprietariosUid = user.uid;
    this.proprietariosEmail = user.email;
  }

  getAll() {
    // return this.estabelecimentosRef.snapshotChanges().pipe(
    //   map(changes => {
    //     return changes.map(m => ({ key: m.payload.key, ...m.payload.val() }));
    //   })
    // );


    const estabelecimentosRef = this.db.list(FirebasePath.ESTABELECIMENTOS, query => query
      .orderByChild('proprietariosUid')
      .equalTo(this.proprietariosUid));

    return estabelecimentosRef.snapshotChanges().pipe(
      map(changes => {
        return changes.map(m => ({ key: m.payload.key, ...m.payload.val() as {} }));
      })
    );
  }

  getByKey(key: string){
    const path = `${FirebasePath.ESTABELECIMENTOS}${key}`;
    return this.db.object(path).snapshotChanges().pipe(
      map(change => {
        return { key: change.payload.key, ...change.payload.val() as {} };
      })
    );
  }

  setEstalebelicimentoKey(token: string){
    localStorage.setItem('estabelecimentoKey', token);
  }

  removeEstalebelicimentoKey(){
    localStorage.removeItem('estabelecimentoKey');
  }

  getEstalebelicimentoKey(){
    return localStorage.getItem('estabelecimentoKey');
  }
}
