import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DiscNumberModalPage } from './disc-number-modal';

@NgModule({
  declarations: [
    DiscNumberModalPage,
  ],
  imports: [
    IonicPageModule.forChild(DiscNumberModalPage),
  ],
})
export class DiscNumberModalPageModule {}
