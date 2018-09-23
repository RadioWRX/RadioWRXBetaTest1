import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateBandEventPage } from './create-band-event';

@NgModule({
  declarations: [
    CreateBandEventPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateBandEventPage),
  ],
})
export class CreateBandEventPageModule {}
