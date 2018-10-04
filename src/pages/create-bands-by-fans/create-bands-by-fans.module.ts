import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateBandsByFansPage } from './create-bands-by-fans';

@NgModule({
  declarations: [
    CreateBandsByFansPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateBandsByFansPage),
  ],
})
export class CreateBandsByFansPageModule {}
