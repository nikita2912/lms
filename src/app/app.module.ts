import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { PhrasesPage } from '../pages/phrases/phrases';
import { FavoritesPage } from '../pages/favorites/favorites';
import { SearchPage } from '../pages/search/search';
import { CategoriesPageModule } from '../pages/categories/categories.module';
import { NetworkServicesProvider } from '../providers/network-services/network-services';
/*import { AlertController } from 'ionic-angular';*/
import { IonicStorageModule } from '@ionic/storage'
//Providers
/*import { Popover } from 'ionic-angular/components/popover/popover';*/
import { AlertServiceProvider } from '../providers/alert-service/alert-service';
import { ToasterProvider } from '../providers/toaster/toaster';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { ForgetpassPage } from '../pages/forgetpass/forgetpass';
import { TabPage } from '../pages/tab/tab';
import { ChaptersPage } from '../pages/chapters/chapters';
import { UtilityProvider } from '../providers/utility/utility';
import { AdsPage } from '../pages/ads/ads';
import { ResetpassPage } from '../pages/resetpass/resetpass';


@NgModule({
  declarations: [
    MyApp,
    HomePage,LoginPage,SignupPage,DashboardPage,
    PhrasesPage,FavoritesPage,SearchPage,ForgetpassPage,TabPage,ChaptersPage,AdsPage,ResetpassPage
  ],
  imports: [
    BrowserModule, IonicStorageModule.forRoot(),
    HttpModule, HttpClientModule,
    HttpClientJsonpModule,
    CategoriesPageModule,
    IonicModule.forRoot(MyApp,{ scrollAssist: false, autoFocusAssist: false })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,LoginPage,SignupPage,DashboardPage,
    PhrasesPage,FavoritesPage,SearchPage,ForgetpassPage,TabPage,ChaptersPage,AdsPage,ResetpassPage
  ],
  providers: [
    StatusBar,ToasterProvider,UtilityProvider,
    SplashScreen,NetworkServicesProvider,AlertServiceProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
