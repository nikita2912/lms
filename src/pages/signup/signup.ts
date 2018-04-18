import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginPage } from '../../pages/login/login';
/*import { AlertController, LoadingController } from 'ionic-angular';*/
import { NetworkServicesProvider } from '../../providers/network-services/network-services';
/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  error: string;
  loader;
  credentialsForm: FormGroup;
  constructor(public navCtrl: NavController,
              /*private loadingCtrl: LoadingController,*/
              private formBuilder: FormBuilder,
              public network: NetworkServicesProvider,
              public navParams: NavParams) {
  
            this.credentialsForm = this.formBuilder.group({
              firstname: ['', Validators.compose([Validators.required])],
              lastname: ['', Validators.compose([Validators.required])],
              phone: ['', Validators.compose([Validators.required])],
              email: ['', Validators.compose([Validators.required])],
              uname: ['', Validators.compose([Validators.required])],
              password: ['', Validators.compose([Validators.required])]
            });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  
  onSignIn(){
    this.network.signUp(this.credentialsForm.value).subscribe( data =>{
      console.log('userdata from response is'+JSON.stringify(data));
      alert(data.message);
      this.navCtrl.push(LoginPage);
    },err=>{
      alert('Error'+JSON.stringify(err));
      console.log('Error'+err);
    });
   }

  }

/* previously
    this.navCtrl.push(LoginPage);
    // this.network.signupUser(this.credentialsForm.value)
    // .subscribe(
    //   data => {
    //     console.log('userdata from response is'+JSON.stringify(data));
    //     console.log("Result is "+data.result);
    //     console.log("Message is"+data.message);
    //     if(data.result == 'success'){
    //       alert('Data added Successfully');
    //      // this.navCtrl.push(ProfilePage);
    //     } else
    //         alert('Unable to create User'+data.message);
    //     }, // success path
    //   error => {
        
    //     console.log("Error is"+JSON.stringify(error));
    //   } // error path
    // );
      if (this.credentialsForm.value.fname != '' && this.credentialsForm.value.phone!= '' &&
        this.credentialsForm.value.email!= '' && this.credentialsForm.value.uname!= '' && 
        this.credentialsForm.value.password!= '' && this.credentialsForm.value.lname!= '') {
        this.loader = this.loadingCtrl.create({
                      spinner: 'bubbles',
                      dismissOnPageChange:true,
                      cssClass: 'my-spinner'
                    });
      this.loader.onDidDismiss(() => {
        console.log('Dismissed loading');
      });
     this.loader.present();
     this.error = "";
      this.network.postSignupService(
      this.credentialsForm.value.fname,
      this.credentialsForm.value.lname,
      this.credentialsForm.value.phone,
      this.credentialsForm.value.email,
      this.credentialsForm.value.uname,
      this.credentialsForm.value.password).then((res: any) => {
            console.log(this.credentialsForm);
            alert("hi")
        }).catch(error => {
          this.loader.dismiss();
        console.error(error)
      })
      } else {
          this.loader.dismiss();
        this.error = "Please enter your full name."
      } 
*/