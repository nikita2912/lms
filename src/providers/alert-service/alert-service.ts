import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';

@Injectable()
export class AlertServiceProvider {

  loader;
  constructor(private alertCtrl: AlertController,
    private loadingCtrl: LoadingController) {
  }

  presentAlert(mMessage: string = "Message", mSubTitle: string = "", mButtonText: string = "OK") {
    let alert = this.alertCtrl.create({
      title: mMessage,
      subTitle: mSubTitle,
      buttons: [mButtonText],
      cssClass: 'my-alert'
    });
    alert.present();
  }

  presentLoader() {
    if (this.loader == null) {
      this.loader = this.loadingCtrl.create({
        spinner: 'bubbles',
        dismissOnPageChange:true,
        // content: '',
        cssClass: 'my-spinner'
      });

      this.loader.onDidDismiss(() => {
        console.log('Dismissed loading');
      });


      this.loader.present();
    }

  }
  dismissLoader() {
    if (this.loader != null) {
      this.loader.dismiss();
    }
  }



}
