import { Injectable } from '@angular/core';
import { AlertController, LoadingController, Loading, LoadingOptions, ToastController } from 'ionic-angular';
import { NetworkServicesProvider } from '../network-services/network-services';
import { Storage } from '@ionic/storage';

@Injectable()
export class UtilityProvider {

  loader;
  alert;


  constructor(public alertCtrl: AlertController,
    public toastCtrl:ToastController,
    public storage:Storage,
    public network:NetworkServicesProvider,
    public loadingCtrl: LoadingController) {
  }

  showAlert(Title = "", Subtitle = "") {
    this.alert = this.alertCtrl.create({
      title: Title,
      subTitle: Subtitle,
      buttons: ['OK'],
      enableBackdropDismiss: true
    }).present();
  }

  showLoader(message) {
    if (this.loader == null) {
      this.loader = this.loadingCtrl.create({
        showBackdrop: true,
        spinner:'hide',
        content: "<div class='lds-facebook'><div></div><div></div><div></div></div><div></div>"+message,
        enableBackdropDismiss:true
      })
      this.loader.present();
    } else{
      this.loader.setContent("<div class='lds-facebook'><div></div><div></div><div></div></div><div></div>"+message)
    }
  }
  hideLoader() {
    if (this.loader != null) {
      this.loader.dismissAll()
      this.loader=null;
    }
  }


  showToast(mMessage, mDuration = 3 * 1000, mPosition = "bottom") {
      this.toastCtrl.create({
        message: mMessage,
        duration: mDuration,
        position: mPosition
      }).present();
  }



}
