import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NetworkServicesProvider } from '../../providers/network-services/network-services';
import { LoginPage } from '../../pages/login/login';

/**
 * Generated class for the ResetpassPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-resetpass',
  templateUrl: 'resetpass.html',
})
export class ResetpassPage {
		credentialsForm: FormGroup;


  constructor(public navCtrl: NavController, public navParams: NavParams,private formBuilder: FormBuilder,
               public network: NetworkServicesProvider) {
  	this.credentialsForm = this.formBuilder.group({
    
              otp:['', Validators.compose([Validators.required])],
              password:['', Validators.compose([Validators.required])],

            });
  }

  resetPassword(){
        this.network.resetPassword(this.credentialsForm.value).subscribe(data=>{
          console.log('Data:'+JSON.stringify(data));
          if(data.status==="SUCCESS"){
            
            alert(data.message);
            this.navCtrl.push(LoginPage)
            }else{
            alert(data.message);
          }
        },err=>{
          console.log('Error is '+ JSON.stringify(err));
        });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResetpassPage');
  }

}
