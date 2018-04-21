import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
/*import { DashboardPage } from '../dashboard/dashboard';*/
import { CategoriesPage } from '../categories/categories';
import { NetworkServicesProvider } from '../../providers/network-services/network-services';
import { UtilityProvider } from '../../providers/utility/utility';
import { AdsPage } from '../../pages/ads/ads';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  menu;
  menus:Object[]=[];ads:Object[]=[];
  user_id;up;ip;p;sp;ug;i;
//  menus = {title:'' }
  constructor(
    public navCtrl: NavController,
    private navParams:NavParams,public utility: UtilityProvider,
    private network:NetworkServicesProvider) {
      this.user_id = this.navParams.get('userId');
      let datas = {user_id:this.user_id}
      this.network.getMenus(datas).subscribe(data=>{
        //console.log('getMenus Response'+JSON.stringify(data));
        this.menu = data.records;
        //console.log('this.menu is '+JSON.stringify(this.menu));
        for (let i = 0 ; i< this.menu.length; i++){
          if(this.menu[i].record_type == 'record'){
           // console.log(JSON.stringify(this.menu));
            this.menus.push(this.menu[i]);
            if(this.menu[i].title == 'Useful Phrases'){
              this.up = this.menu[i];
            }else if(this.menu[i].title == 'Idioms & proverbs'){
              this.ip = this.menu[i];
            }else if(this.menu[i].title == 'Pictionary'){
              this.p = this.menu[i];
            }else if(this.menu[i].title == 'Speak English'){
              this.sp = this.menu[i];
            }else{
              this.ug = this.menu[i];
            }
            console.log('Menu'+JSON.stringify(this.menus));
          }else{
            this.ads.push(this.menu[i]);
            console.log('ADS'+JSON.stringify(this.ads));
          }
        }

    },err=>{
      console.log("Error in code is"+err)
    });
  }
  ionViewDidLoad(){
    console.log('HomePage');
  }
  menuDetails(m){
    this.utility.showLoader('Logging in...')
    //assume recordId is menuId
    let data = {user_id:this.user_id, record_id:m.menuId, record_type:'menu'}
    this.network.getData(data).subscribe(data=>{
      //this.navCtrl.push();
      this.utility.hideLoader();
        this.navCtrl.push(CategoriesPage,{item:data.results,clickedMenu:m, user_id:this.user_id});
/*      if(m.title == 'Useful Phrases'){
        this.navCtrl.push(CategoriesPage,{item:data.results});
      }else if(m.title == 'Idioms & proverbs'){
        this.navCtrl.push(CategoriesPage,{item:data.results});
      }else if(m.title == 'Pictionary'){
        this.navCtrl.push(CategoriesPage,{item:data.results});
      }else if(m.title == 'Speak English'){
        this.navCtrl.push(CategoriesPage,{item:data.results});
      }else
        console.log('Invalid Menu');*/
    });
  }
    menu1(){
                this.navCtrl.push(AdsPage);

    }

}
