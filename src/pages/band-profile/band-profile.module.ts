import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BandProfilePage } from './band-profile';

@NgModule({
  declarations: [
    BandProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(BandProfilePage),
  ],
})
export class BandProfilePageModule {}
