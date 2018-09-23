import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateAlbumPage } from './create-album';

@NgModule({
  declarations: [
    CreateAlbumPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateAlbumPage),
  ],
})
export class CreateAlbumPageModule {}
