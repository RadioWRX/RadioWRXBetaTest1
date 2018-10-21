import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LabelNameModalPage } from './label-name-modal';

@NgModule({
  declarations: [
    LabelNameModalPage,
  ],
  imports: [
    IonicPageModule.forChild(LabelNameModalPage),
  ],
})
export class LabelNameModalPageModule {}
