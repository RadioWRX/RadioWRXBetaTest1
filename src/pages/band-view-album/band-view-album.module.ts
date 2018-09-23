import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BandViewAlbumPage } from './band-view-album';

@NgModule({
  declarations: [
    BandViewAlbumPage,
  ],
  imports: [
    IonicPageModule.forChild(BandViewAlbumPage),
  ],
})
export class BandViewAlbumPageModule {}
