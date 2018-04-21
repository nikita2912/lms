import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChaptersPage } from '../../pages/chapters/chapters';
import { UtilityProvider } from '../../providers/utility/utility';
/**

 * Generated class for the PhrasesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-phrases',
  templateUrl: 'phrases.html',
})
export class PhrasesPage {

  submenus: any;
  constructor(public navCtrl: NavController,public utility: UtilityProvider, public navParams: NavParams) {
   
    this.submenus = navParams.get('submenus');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhrasesPage');
  }
  goTocom(){
    
    this.navCtrl.push( ChaptersPage); 
  }
  goToemr(){
    this.navCtrl.push( ChaptersPage); 
  }
  goTocroa(){
    this.navCtrl.push( ChaptersPage); 
  }
  goToeat(){
    this.navCtrl.push( ChaptersPage); 
  }
  goToshop(){
  this.navCtrl.push( ChaptersPage); 
  }
  goTogreet(){
    this.navCtrl.push( ChaptersPage); 
  }
}

