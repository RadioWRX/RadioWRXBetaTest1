import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IsrcCodeModalPage } from './isrc-code-modal';

@NgModule({
  declarations: [
    IsrcCodeModalPage,
  ],
  imports: [
    IonicPageModule.forChild(IsrcCodeModalPage),
  ],
})
export class IsrcCodeModalPageModule {}
