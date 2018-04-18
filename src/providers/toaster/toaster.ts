import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';


@Injectable()
export class ToasterProvider {

  constructor(private toastCtrl:ToastController) {
  }


  showToast(msg: string, time: number=3*1000, pos: string="top") {
      let toast = this.toastCtrl.create({
          message: msg,
          duration: time,
          position: pos
      });
      toast.present();
  }

}
