import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChaptersPage } from '../../pages/chapters/chapters';
import { NetworkServicesProvider } from '../../providers/network-services/network-services';



@IonicPage()
@Component({
  selector: 'page-phrases',
  templateUrl: 'phrases.html',
})
export class PhrasesPage {

  phrases;menus:Object[]=[];ads:Object[]=[];menu;
  com;emer;roa;greet;eat;shop;num;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private network:NetworkServicesProvider) {
    console.log('>>>>>>>>>>>Bagzzz>>>>>>>'+this.navParams.data);
    this.phrases = this.navParams.get('item');
    console.log('Data in Phrases' +JSON.stringify(this.phrases));
    console.log('Length'+this.phrases.length);

    for (let i = 0 ; i< this.phrases.length; i++){
      if(this.phrases[i].record_type == 'record'){
          this.menus.push(this.phrases[i]);
          //this.menus.push(this.menu[i]);
            if(this.phrases[i].title == 'Common'){
              this.com = this.phrases[i];
              console.log('Phrase Common '+[i]+JSON.stringify(this.com));
            }else if(this.phrases[i].title == 'Emergency'){
              this.emer = this.phrases[i];
              console.log('Phrase '+[i]+this.phrases[i].title);
            }else if(this.phrases[i].title == 'Romance'){
              this.roa = this.phrases[i];
              console.log('Phrase '+[i]+this.phrases[i].title);
            }else if(this.phrases[i].title == 'Greetings'){
              this.greet = this.phrases[i];
              console.log('Phrase '+[i]+this.phrases[i].title);
            }else if(this.phrases[i].title == 'Eatings'){
              this.eat = this.phrases[i];
              console.log('Phrase '+[i]+this.phrases[i].title);
            }else if(this.phrases[i].title == 'Shopping'){
              this.shop = this.phrases[i];
              console.log('Phrase '+[i]+this.phrases[i].title);
            }else{
              this.num = this.phrases[i];
            }
            console.log('inside for If'+JSON.stringify(this.menus));
          }else{
            this.ads.push(this.phrases[i]);
            console.log('inside for Else'+JSON.stringify(this.ads));
          }
          console.log('inside for If'+JSON.stringify(this.menus));
    }
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad PhrasesPage');
  }
 }

