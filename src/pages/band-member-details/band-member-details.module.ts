import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BandMemberDetailsPage } from './band-member-details';

@NgModule({
  declarations: [
    BandMemberDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(BandMemberDetailsPage),
  ],
})
export class BandMemberDetailsPageModule {}
