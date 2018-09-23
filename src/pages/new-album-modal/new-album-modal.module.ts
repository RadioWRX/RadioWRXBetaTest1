import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewAlbumModalPage } from './new-album-modal';

@NgModule({
  declarations: [
    NewAlbumModalPage,
  ],
  imports: [
    IonicPageModule.forChild(NewAlbumModalPage),
  ],
})
export class NewAlbumModalPageModule {}
