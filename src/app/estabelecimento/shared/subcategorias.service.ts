import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import {AngularFireStorage} from '@angular/fire/storage';
import {FirebasePath} from '../../core/shared/firebase-path';
import {finalize, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SubcategoriasService {

  subcategoriasRef: AngularFireList<any>;

  constructor(
    private db: AngularFireDatabase,
    private storage: AngularFireStorage
  ) {
    this.subcategoriasRef = this.db.list(FirebasePath.SUBCATEGORIAS);
  }

  insert(subcategoria: any){
    return this.save(subcategoria, null);
  }

  update(subcategoria: any, key: string){
    return this.save(subcategoria, key);
  }

  private save(subcategoria: any, key: string){
    return new Promise((resolve, reject) => {
      const subcategoriaRef = {
        nome: subcategoria.nome,
        categoriaKey: subcategoria.categoriaKey,
        categoriaNome: subcategoria.categoriaNome,
      }

      if (key) {
        this.subcategoriasRef.update(key, subcategoriaRef)
          .then(() => resolve(key))
          .catch(() => reject());
      } else {
        this.subcategoriasRef.push(subcategoriaRef)
          .then((result: any) => resolve(result.key));
      }
    });
  }

  getAll() {
    return this.subcategoriasRef.snapshotChanges().pipe(
      map(changes => {
        return changes.map(m => ({ key: m.payload.key, ...m.payload.val() }));
      })
    );
  }

  getByKey(key: string) {
    const path = `${FirebasePath.SUBCATEGORIAS}${key}`;
    return this.db.object(path).snapshotChanges().pipe(
      map(change => {
        return ({ key: change.key, ...change.payload.val() as {} });
      })
    );
  }

  getByCategoriaKey(categoriaKey: string){
    const subcategoriasRef = this.db.list(FirebasePath.SUBCATEGORIAS, query => query
      .orderByChild('categoriaKey')
      .equalTo(categoriaKey));

    return subcategoriasRef.snapshotChanges().pipe(
      map(changes => {
        return changes.map(m => ({ key: m.payload.key, ...m.payload.val() as {} }));
      })
    );
  }

  remove(key: string, filePath: string){
    this.subcategoriasRef.remove(key);
    if(filePath)
      this.removeImg(filePath, key, false);
  }

  uploadImg(key: string, file: File){
    const filePath = `${FirebasePath.SUBCATEGORIAS}${key}/${file.name}`;
    const ref = this.storage.ref(filePath);
    const task = ref.put(file);
    task.snapshotChanges().pipe(
      finalize(() => {
        ref.getDownloadURL().subscribe((url => {
          this.subcategoriasRef.update(key, {imagem: url, filePath: filePath });
        }))
      })
    ).subscribe();
  }

  removeImg(filePath: string, key: string, atualizarSubcategoria: boolean = true) {
    const ref = this.storage.ref(filePath);
    ref.delete();
    if (atualizarSubcategoria){
      this.subcategoriasRef.update(key, {imagem: '', filePath: '' });
    }
  }
}
