import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IswcModalPage } from './iswc-modal';

@NgModule({
  declarations: [
    IswcModalPage,
  ],
  imports: [
    IonicPageModule.forChild(IswcModalPage),
  ],
})
export class IswcModalPageModule {}
