import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase';
import {FirebasePath} from '../../core/shared/firebase-path';
import {AngularFireDatabase} from "@angular/fire/database";
import {AngularFireStorage} from "@angular/fire/storage";
import {finalize, map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UsuarioAuthService {

  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    private storage: AngularFireStorage
  ) { }

  // criarConta(usuario: any) {
  //   return new Promise((resolve, reject) => {
  //     this.afAuth.createUserWithEmailAndPassword(usuario.email, usuario.senha)
  //       .then((userCredential: firebase.auth.UserCredential) => {
  //         userCredential.user.updateProfile({ displayName: usuario.nome, photoURL: '' });
  //         userCredential.user.sendEmailVerification();
  //         this.logout();
  //         resolve();
  //       })
  //       .catch((error: any) => {
  //         reject(this.handlerError(error));
  //       });
  //   });
  // }


  login(email: string, senha: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.signInWithEmailAndPassword(email, senha)
        .then((userCredential) => {
          resolve();
        })
        .catch((error: any) => {
          reject(this.handlerError(error));
        });
    });
  }

  logout() {
    return this.afAuth.signOut();
  }

  enviarEmailResetarSenha(email: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.sendPasswordResetEmail(email)
        .then(() => {
          resolve();
        })
        .catch((error: any) => {
          reject(this.handlerError(error));
        });
    });
  }


  criarConta(usuario: any){
    return new Promise((resolve, reject) => {
      this.afAuth.createUserWithEmailAndPassword(usuario.email, usuario.senha)
        .then((userCredential: firebase.auth.UserCredential) => {
          userCredential.user.updateProfile({ displayName: usuario.nome, photoURL: '' });
          userCredential.user.sendEmailVerification();
          this.logout();
          resolve('ok');
        })
        .catch((error: any) => {
          reject(this.handlerError(error));
        });
    });
  }



  handlerError(error: any) {
    let mensagem = '';
    if (error.code == 'auth/email-already-in-use') {
      mensagem = 'O e-mail informado já está sendo usado.';
    } else if (error.code == 'auth/invalid-email') {
      mensagem = 'O e-mail informado é inválido.';
    } else if (error.code == 'auth/operation-not-allowed') {
      mensagem = 'A autenticação por email e senha não está habilitada';
    } else if (error.code == 'auth/weak-password') {
      mensagem = 'A senha utilizada é muito fraca. Por favor escolha outra senha.';
    } else if (error.code == 'auth/user-disabled') {
      mensagem = 'O usuário está desabilitado, por favor contact o administrador.';
    } else if (error.code == 'auth/user-not-found' || error.code == 'auth/wrong-password') {
      mensagem = 'O usuario/senha inválido(s)';
    }

    return mensagem;
  }

  updateProfile(values: any) {
    return new Promise((resolve, reject) => {
      firebase.auth().currentUser.updateProfile({ displayName: values.nome, photoURL: firebase.auth().currentUser.photoURL });

      const path = `${FirebasePath.USUARIOS}${firebase.auth().currentUser.uid}`
      this.db.object(path).update({ telefone: values.telefone })
        .then(() => resolve())
        .catch(() => reject());
    });
  }

  updatePassword(password: string){
    var user = firebase.auth().currentUser;
    user.updatePassword(password);
  }

  getDadosUsuario() {
    const path = `${FirebasePath.USUARIOS}${firebase.auth().currentUser.uid}`
    return this.db.object(path).snapshotChanges().pipe(
      map(change => {
        return ({ key: change.key, nome: firebase.auth().currentUser.displayName, ...change.payload.val() as {} });
      })
    );
  }

  uploadImg(file: File) {
    var user = firebase.auth().currentUser;
    return new Promise((resolve) => {
      const path = `${FirebasePath.USUARIOS}${user.uid}`;
      const filePath = `${FirebasePath.USUARIOS}${user.uid}/${file.name}`;
      const ref = this.storage.ref(filePath);
      const task = ref.put(file);
      task.snapshotChanges().pipe(
        finalize(() => {
          ref.getDownloadURL().subscribe((url => {
            this.db.object(path).update({ img: url, filePath: filePath });
            firebase.auth().currentUser.updateProfile({ displayName: user.displayName, photoURL: url });
            resolve();
          }));
        })
      ).subscribe();
    })
  }

  removeImg(filePath: string) {
    const path = `${FirebasePath.USUARIOS}${firebase.auth().currentUser.uid}`;
    const ref = this.storage.ref(filePath);
    ref.delete();
    this.db.object(path).update({ img: '', filePath: '' });
    firebase.auth().currentUser.updateProfile({ displayName: firebase.auth().currentUser.displayName, photoURL: null });
  }



  getUser(){
    var user = firebase.auth().currentUser;
    var name, email, photoUrl, uid, emailVerified;

    if (user != null) {
      return {
        uid: user.uid,
        name: user.displayName,
        email: user.email,
        photoUrl: user.photoURL,
        emailVerified: user.emailVerified,
        telefone: ''
      }
    }
  }



}
