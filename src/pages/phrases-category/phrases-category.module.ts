import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PhrasesCategoryPage } from './phrases-category';

@NgModule({
  declarations: [
    PhrasesCategoryPage,
  ],
  imports: [
    IonicPageModule.forChild(PhrasesCategoryPage),
  ],
})
export class PhrasesCategoryPageModule {}
