import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PhrasesPage } from '../../pages/phrases/phrases';
import { SearchPage } from '../../pages/search/search';
import { FavoritesPage } from '../../pages/favorites/favorites';

@IonicPage()
@Component({
  selector: 'page-tab',
  templateUrl: 'tab.html',
})
export class TabPage {
  phrases;
  tab1Root = PhrasesPage;
  tab2Root = SearchPage;
  tab3Root = FavoritesPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.phrases = this.navParams.get('item');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabPage');
  }

}
