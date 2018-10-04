import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditBandMemberPage } from './edit-band-member';

@NgModule({
  declarations: [
    EditBandMemberPage,
  ],
  imports: [
    IonicPageModule.forChild(EditBandMemberPage),
  ],
})
export class EditBandMemberPageModule {}
