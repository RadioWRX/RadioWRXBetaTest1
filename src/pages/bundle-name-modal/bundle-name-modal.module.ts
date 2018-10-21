import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BundleNameModalPage } from './bundle-name-modal';

@NgModule({
  declarations: [
    BundleNameModalPage,
  ],
  imports: [
    IonicPageModule.forChild(BundleNameModalPage),
  ],
})
export class BundleNameModalPageModule {}
