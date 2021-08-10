import { Injectable } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {AngularFireStorage} from '@angular/fire/storage';
import {FirebasePath} from '../../core/shared/firebase-path';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EstabelecimentoService {

  constructor(
    private db: AngularFireDatabase,
    private storage: AngularFireStorage
  ) { }

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
