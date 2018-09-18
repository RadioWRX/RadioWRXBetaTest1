import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewBandMemberModalPage } from './new-band-member-modal';

@NgModule({
  declarations: [
    NewBandMemberModalPage,
  ],
  imports: [
    IonicPageModule.forChild(NewBandMemberModalPage),
  ],
})
export class NewBandMemberModalPageModule {}
