import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPageModule } from '../pages/login/login.module';
import { SignupPageModule } from '../pages/signup/signup.module';
import { DashboardPageModule } from '../pages/dashboard/dashboard.module';
import { PhrasesPageModule } from '../pages/phrases/phrases.module';
import { FavoritesPageModule } from '../pages/favorites/favorites.module';
import { SearchPageModule } from '../pages/search/search.module';
import { CategoriesPageModule } from '../pages/categories/categories.module';
import { NetworkServicesProvider } from '../providers/network-services/network-services';
import { AlertServiceProvider } from '../providers/alert-service/alert-service';
import { ToasterProvider } from '../providers/toaster/toaster';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { ForgetpassPageModule } from '../pages/forgetpass/forgetpass.module';
import { TabPageModule } from '../pages/tab/tab.module';
import { ChaptersPageModule } from '../pages/chapters/chapters.module';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
  ],
  imports: [
    BrowserModule,
    HttpModule, HttpClientModule,
    HttpClientJsonpModule,LoginPageModule,SignupPageModule,DashboardPageModule,
    CategoriesPageModule,PhrasesPageModule,FavoritesPageModule,SearchPageModule,
    ChaptersPageModule,ForgetpassPageModule,TabPageModule,
    IonicModule.forRoot(MyApp,{ scrollAssist: false, autoFocusAssist: false })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,ToasterProvider,
    SplashScreen,NetworkServicesProvider,AlertServiceProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
