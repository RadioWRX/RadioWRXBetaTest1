import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BandEventDetailsPage } from './band-event-details';

@NgModule({
  declarations: [
    BandEventDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(BandEventDetailsPage),
  ],
})
export class BandEventDetailsPageModule {}
