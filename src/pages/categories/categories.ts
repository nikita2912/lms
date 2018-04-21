import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NetworkServicesProvider } from '../../providers/network-services/network-services';
import { TabPage } from '../tab/tab';
import { UtilityProvider } from '../../providers/utility/utility';
/**
 * Generated class for the CategoriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html',
})
export class CategoriesPage {
  clickedMenu: any;
	category;menus:Object[]=[];ads:Object[]=[];user_id;
  constructor(public navCtrl: NavController,
  	public navParams: NavParams,public utility: UtilityProvider,
  	private network:NetworkServicesProvider) {
    this.category = this.navParams.get('item');
    this.clickedMenu = this.navParams.get('clickedMenu');
    console.log(")))))))")
    console.log(this.clickedMenu)
  	this.user_id = this.navParams.get('user_id');
  	//console.log('Categories'+JSON.stringify(this.category));

    for (let i = 0 ; i< this.category.length; i++){
    	if(this.category[i].record_type == 'record'){
        // console.log(JSON.stringify(this.menu));
        this.menus.push(this.category[i]);
        	//console.log('inside for If'+JSON.stringify(this.menus));
        }else{
        	this.ads.push(this.category[i]);
            //console.log('inside for Else'+JSON.stringify(this.ads));
          }
        }

  }
  Category(cat){
    this.utility.showLoader('Logging in...')
  	let data = {user_id:this.user_id, record_id:cat.menuId, record_type:'category'}
  	this.network.getData(data).subscribe(data=>{
      console.log('Data in Category is'+JSON.stringify(cat));
      this.utility.hideLoader();
      this.navCtrl.push(TabPage,{clickedMenu:this.clickedMenu,catClicked:cat,subCatData:data.results,user_id:this.user_id});
  	},err =>{
  		console.log('Error is'+ err);
  	});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriesPage');
  }

}
