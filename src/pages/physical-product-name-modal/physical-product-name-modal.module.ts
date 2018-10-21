import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PhysicalProductNameModalPage } from './physical-product-name-modal';

@NgModule({
  declarations: [
    PhysicalProductNameModalPage,
  ],
  imports: [
    IonicPageModule.forChild(PhysicalProductNameModalPage),
  ],
})
export class PhysicalProductNameModalPageModule {}
