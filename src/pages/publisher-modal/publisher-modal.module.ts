import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PublisherModalPage } from './publisher-modal';

@NgModule({
  declarations: [
    PublisherModalPage,
  ],
  imports: [
    IonicPageModule.forChild(PublisherModalPage),
  ],
})
export class PublisherModalPageModule {}
