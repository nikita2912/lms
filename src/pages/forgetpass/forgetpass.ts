import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NetworkServicesProvider } from '../../providers/network-services/network-services';
import { ResetpassPage } from '../../pages/resetpass/resetpass';

/**
 * Generated class for the ForgetpassPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forgetpass',
  templateUrl: 'forgetpass.html',
})
export class ForgetpassPage {
	credentialsForm: FormGroup;


  constructor(public navCtrl: NavController,
               public navParams: NavParams, 
               private formBuilder: FormBuilder,
               public network: NetworkServicesProvider) {
  	 this.credentialsForm = this.formBuilder.group({
    
              userinput: ['', Validators.compose([Validators.required])],
              
            });
  }

  submit(){
        this.network.submit(this.credentialsForm.value).subscribe(data=>{
          console.log('Forgot Phone no is:'+JSON.stringify(data));
          if(data.status==="SUCCESS"){
            this.navCtrl.push(ResetpassPage)
            //alert(data.status);

            }else{
            alert(data.message);
          }
        },err=>{
          console.log('Error is '+ JSON.stringify(err));
        });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgetpassPage');
  }

}
