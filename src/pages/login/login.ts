import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import { FormBuilder, FormGroup, Validators/*, FormControl */} from '@angular/forms';
/*import { HttpHeaders } from "@angular/common/http";*/
/*import { Observer } from 'rxjs/Observer';*/
import 'rxjs/add/operator/map';
/*import { Injectable } from '@angular/core';*/
import 'rxjs/add/operator/map';
import { NetworkServicesProvider } from '../../providers/network-services/network-services';
import { AlertController } from 'ionic-angular';
//Providers
/*import { Popover } from 'ionic-angular/components/popover/popover';*/
import { AlertServiceProvider } from '../../providers/alert-service/alert-service';
import { ToasterProvider } from '../../providers/toaster/toaster';

import { SignupPage } from '../../pages/signup/signup';
/*import { DashboardPage } from '../dashboard/dashboard';*/
/*import { PhrasesPage } from '../phrases/phrases';*/
/*import { PhrasesCategoryPage } from '../phrases-category/phrases-category';*/
import { ForgetpassPage } from '../forgetpass/forgetpass';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  credentialsForm: FormGroup;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,public platform: Platform,
              private formBuilder: FormBuilder,
              public network: NetworkServicesProvider,
              public alertService: AlertServiceProvider, public alertCtrl: AlertController,
              public toasterService: ToasterProvider) {

    this.credentialsForm = this.formBuilder.group({
      email: [
        '', Validators.compose([
          Validators.required
        ])
      ],
      password: [
        '', Validators.compose([
          Validators.required
        ])
      ]
    });
  }

/*  ngOnInit() {
    
    this.credentialsForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    pswd: new FormControl('', [Validators.required, Validators.maxLength(10)])
    
    });

  }*/


  openLoc() {
        // this.network.getLocation().then(address => {
        //     console.log(address)
        // }).catch(error => {
        //     console.error(error)
        // })
 
}
  login() {
  
        this.network.login(this.credentialsForm.value).subscribe(data=>{
          console.log('Sign In data'+JSON.stringify(data));
          if(data.status==="SUCCESS"){
            //alert(data.status);
            let user = data.userDetails[0];
            console.log(JSON.stringify(data.userDetails));
            console.log(user.userId);
            //alert(user.userId);
            this.navCtrl.push(HomePage,{userId:user.userId});
          }else{
            alert(data.message);
          }
        },err=>{
          console.log('Error is '+ JSON.stringify(err));
        });
  }

  onForgotPassword() {
    this.navCtrl.push(ForgetpassPage); 
    //this.logger.info('SignInPage: onForgotPassword()');
  }
  onSignup() {
    this.navCtrl.push(SignupPage); 
    //this.logger.info('SignInPage: onForgotPassword()');
  }

}
