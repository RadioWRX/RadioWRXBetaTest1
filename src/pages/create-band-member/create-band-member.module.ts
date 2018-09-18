import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateBandMemberPage } from './create-band-member';

@NgModule({
  declarations: [
    CreateBandMemberPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateBandMemberPage),
  ],
})
export class CreateBandMemberPageModule {}
