import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BundleIdModalPage } from './bundle-id-modal';

@NgModule({
  declarations: [
    BundleIdModalPage,
  ],
  imports: [
    IonicPageModule.forChild(BundleIdModalPage),
  ],
})
export class BundleIdModalPageModule {}
