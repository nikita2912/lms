import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Tabs } from 'ionic-angular';
import { PhrasesPage } from '../../pages/phrases/phrases';
import { FavoritesPage } from '../../pages/favorites/favorites';
import { SearchPage } from '../../pages/search/search';
/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {
  @ViewChild('myTabs') tabRef: Tabs;
  PhrasesPage = PhrasesPage;
  FavoritesPage = FavoritesPage;
  SearchPage = SearchPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }
  ionViewDidEnter() {
    this.tabRef.select(0);
   }
}
