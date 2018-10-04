import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewBandMembersPage } from './view-band-members';

@NgModule({
  declarations: [
    ViewBandMembersPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewBandMembersPage),
  ],
})
export class ViewBandMembersPageModule {}
