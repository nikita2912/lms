import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PhrasesPage } from '../../pages/phrases/phrases';
import { SearchPage } from '../../pages/search/search';
import { FavoritesPage } from '../../pages/favorites/favorites';
import { UtilityProvider } from '../../providers/utility/utility';
@IonicPage()
@Component({
  selector: 'page-tab',
  templateUrl: 'tab.html',
})
export class TabPage {
  catClicked: any;
  clickedMenu: any;
	subCatData;submenus:Object[]=[];subads:Object[]=[];user_id;
 
  tab1Root = PhrasesPage;
  tab2Root = SearchPage;
  tab3Root = FavoritesPage;
  tab1Params  = { submenus: this.submenus};
  constructor(public navCtrl: NavController,public utility: UtilityProvider, public navParams: NavParams) {
    this.subCatData = this.navParams.get('subCatData');
    this.clickedMenu = this.navParams.get('clickedMenu');
    this.catClicked = this.navParams.get('catClicked');
    console.log(this.clickedMenu);
    console.log(this.catClicked );
  	this.user_id = this.navParams.get('user_id');
  	

    for (let i = 0 ; i< this.subCatData.length; i++){
    	if(this.subCatData[i].record_type == 'record'){
        this.submenus.push(this.subCatData[i]);

        }else{
        	this.subads.push(this.subCatData[i]);
          }

        }
  console.log(this.submenus)
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabPage');
  }

}
