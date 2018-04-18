import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
/*import { DashboardPage } from '../dashboard/dashboard';*/
import { CategoriesPage } from '../categories/categories';
import { NetworkServicesProvider } from '../../providers/network-services/network-services';


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
    private navParams:NavParams,
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
            console.log('inside for If'+JSON.stringify(this.menus));
          }else{
            this.ads.push(this.menu[i]);
            console.log('inside for Else'+JSON.stringify(this.ads));
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
    //assume recordId is menuId
    let data = {user_id:this.user_id, record_id:m.menuId, record_type:'menu'}
    this.network.getData(data).subscribe(data=>{
      console.log('getMenus Data Response'+JSON.stringify(data));
      //this.navCtrl.push();
        this.navCtrl.push(CategoriesPage,{item:data.results, user_id:this.user_id});
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
/*  goTophrases(){
    this.navCtrl.push(PhrasesCategoryPage); 
  }
  idomsphrases()
  {
  	this.navCtrl.push(PhrasesCategoryPage);
  }
  picphrases(){
  	this.navCtrl.push(PhrasesCategoryPage);
   }
  sephrases(){
  	this.navCtrl.push(PhrasesCategoryPage);
   }
  ugphrases(){
  	this.navCtrl.push(PhrasesCategoryPage);
   }*/
}
