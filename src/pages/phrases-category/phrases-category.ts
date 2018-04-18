import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabPage } from '../tab/tab';
/**
 * Generated class for the PhrasesCategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-phrases-category',
  templateUrl: 'phrases-category.html',
})
export class PhrasesCategoryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhrasesCategoryPage');
  }
  basic(){
    this.navCtrl.push(TabPage); 
  }
  goToInt(){
    this.navCtrl.push(TabPage); 
  }
  goToAdv(){
    this.navCtrl.push(TabPage); 
  }
}
