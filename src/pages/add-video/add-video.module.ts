import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddVideoPage } from './add-video';

@NgModule({
  declarations: [
    AddVideoPage,
  ],
  imports: [
    IonicPageModule.forChild(AddVideoPage),
  ],
})
export class AddVideoPageModule {}
