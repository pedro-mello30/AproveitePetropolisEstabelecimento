import { Injectable } from '@angular/core';
import {ToastController} from "@ionic/angular";

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toast: ToastController) { }

  async showSuccess(message: string){
    // //forma sem o async
    // return this.toast.create({
    //   message: message,
    //   duration: 2000;
    //   color: 'success',
    //   position: 'bottom'
    // }).then(toastResult => {
    //   toastResult.present();
    // });

    const toastResult = await this.toast.create({
      message: message,
      duration: 2000,
      color: 'success',
      position: 'bottom'
    });
    toastResult.present();
  }

  async showError(message: string){

    const toastResult = await this.toast.create({
      message: message,
      duration: 2000,
      color: 'danger',
      position: 'bottom'
    });
    toastResult.present();
  }
}
