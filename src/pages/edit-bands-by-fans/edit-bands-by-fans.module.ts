import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditBandsByFansPage } from './edit-bands-by-fans';

@NgModule({
  declarations: [
    EditBandsByFansPage,
  ],
  imports: [
    IonicPageModule.forChild(EditBandsByFansPage),
  ],
})
export class EditBandsByFansPageModule {}
