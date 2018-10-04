import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BandsByFansDetailsPage } from './bands-by-fans-details';

@NgModule({
  declarations: [
    BandsByFansDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(BandsByFansDetailsPage),
  ],
})
export class BandsByFansDetailsPageModule {}
