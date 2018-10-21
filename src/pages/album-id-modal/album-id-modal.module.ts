import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlbumIdModalPage } from './album-id-modal';

@NgModule({
  declarations: [
    AlbumIdModalPage,
  ],
  imports: [
    IonicPageModule.forChild(AlbumIdModalPage),
  ],
})
export class AlbumIdModalPageModule {}
