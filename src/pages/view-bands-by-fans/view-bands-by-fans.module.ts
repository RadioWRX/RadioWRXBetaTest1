import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewBandsByFansPage } from './view-bands-by-fans';

@NgModule({
  declarations: [
    ViewBandsByFansPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewBandsByFansPage),
  ],
})
export class ViewBandsByFansPageModule {}
