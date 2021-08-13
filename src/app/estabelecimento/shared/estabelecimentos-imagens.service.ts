import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import {FirebasePath} from '../../core/shared/firebase-path';
import {finalize, map} from 'rxjs/operators';
import {AngularFireStorage} from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class EstabelecimentosImagensService {

  imagensRef: AngularFireList<any>;
  path: string = `${FirebasePath.ESTABELECIMENTOS_IMAGENS}`;

  constructor(
    // keyEstabelecimento: string,
    private db: AngularFireDatabase,
    private storage: AngularFireStorage
  ) {
    // this.setPath(keyEstabelecimento);
    this.imagensRef = this.db.list(this.path);
  }


  private insert(imagem: any){
    return new Promise(resolve => {
      this.imagensRef.push(imagem)
        .then((result: any) => resolve(result.key));
    });
  }

  update(imagem: any){

  }

  getAll(){
    return this.imagensRef.snapshotChanges().pipe(
      map(changes => {
        return changes.map(m => ({ key: m.payload.key, ...m.payload.val() }));
      })
    );
  }

  getByKey(key: string){

  }

  remove(key: string, filePath: string){
    const ref = this.storage.ref(filePath);
    ref.delete();
    this.imagensRef.remove(key);
  }

  getByField(field: string , value: string){
    const imagensRef = this.db.list(FirebasePath.ESTABELECIMENTOS_IMAGENS, query => query
      .orderByChild(field)
      .equalTo(value));

    return imagensRef.snapshotChanges().pipe(
      map(changes => {
        return changes.map(m => ({ key: m.payload.key, ...m.payload.val() as {} }));
      })
    );
  }



  async uploadImg(keyEstabelecimento: string, file: File){
    const filePath = `${this.path}/${keyEstabelecimento}/${file.name}`;
    const ref = this.storage.ref(filePath);
    const task = ref.put(file);
    task.snapshotChanges().pipe(
      finalize(() => {
        ref.getDownloadURL().subscribe((url => {
          const img = {
            estabelecimentoKey: keyEstabelecimento,
            imagem: url,
            filePath: filePath
          };
          this.insert(img);
          // return { imagem: url, filePath: filePath };
        }));
      })
    ).subscribe();
  }

}
