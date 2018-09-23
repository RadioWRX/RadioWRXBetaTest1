import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewBandEventModalPage } from './new-band-event-modal';

@NgModule({
  declarations: [
    NewBandEventModalPage,
  ],
  imports: [
    IonicPageModule.forChild(NewBandEventModalPage),
  ],
})
export class NewBandEventModalPageModule {}
