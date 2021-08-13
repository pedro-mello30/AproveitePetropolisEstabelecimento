import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import {AngularFireStorage} from '@angular/fire/storage';
import {FirebasePath} from '../../core/shared/firebase-path';
import {finalize, map} from 'rxjs/operators';
import {AngularFireAuth} from "@angular/fire/auth";
import {UsuarioAuthService} from "../../login/shared/usuario-auth.service";

@Injectable({
  providedIn: 'root'
})
export class EstabelecimentosService {

  estabelecimentosRef: AngularFireList<any>;
  proprietariosUid: string;
  proprietariosEmail: string;

  constructor(
    private db: AngularFireDatabase,
    private storage: AngularFireStorage,
    private afAuth: AngularFireAuth,
    private usuarioService: UsuarioAuthService
  ) {
    this.estabelecimentosRef = this.db.list(FirebasePath.ESTABELECIMENTOS);

    console.log(this.usuarioService.getUser());

    const user = this.usuarioService.getUser();
    this.proprietariosUid = user.uid;
    this.proprietariosEmail = user.email;
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
      map( change => {
        return { key: change.payload.key, ...change.payload.val() as {} };
      })
    );
  }

  insert(estabelecimento: any){
    return new Promise(resolve => {
      this.estabelecimentosRef.push(estabelecimento)
        .then((result: any) => resolve(result.key));
    });
  }

  update(key: string, estabelecimento: any){
    return new Promise((resolve, reject) => {

      this.estabelecimentosRef.update(key, estabelecimento)
        .then(() => resolve(key))
        .catch(() => reject());
    });
  }

  remove(key: string, filePath: string){
    return this.estabelecimentosRef.remove(key);
    if(filePath)
      this.removeLogo(filePath, key, false);
  }

  uploadLogo(key: string, file: File){
    const filePath = `${FirebasePath.ESTABELECIMENTOS}${key}/${file.name}`;
    const ref = this.storage.ref(filePath);
    const task = ref.put(file);
    task.snapshotChanges().pipe(
      finalize(() => {
        ref.getDownloadURL().subscribe((url => {
          this.estabelecimentosRef.update(key, {logo: url, fileLogoPath: filePath });
        }));
      })
    ).subscribe();
  }

  removeLogo(filePath: string, key: string, atualizarEstabelecimento: boolean = true) {
    const ref = this.storage.ref(filePath);
    ref.delete();
    if (atualizarEstabelecimento){
      this.estabelecimentosRef.update(key, {logo: '', fileLogoPath: '' });
    }
  }
}
