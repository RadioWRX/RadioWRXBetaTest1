import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditAlbumPage } from './edit-album';

@NgModule({
  declarations: [
    EditAlbumPage,
  ],
  imports: [
    IonicPageModule.forChild(EditAlbumPage),
  ],
})
export class EditAlbumPageModule {}
