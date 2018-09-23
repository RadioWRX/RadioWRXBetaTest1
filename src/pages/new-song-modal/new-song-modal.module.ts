import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewSongModalPage } from './new-song-modal';

@NgModule({
  declarations: [
    NewSongModalPage,
  ],
  imports: [
    IonicPageModule.forChild(NewSongModalPage),
  ],
})
export class NewSongModalPageModule {}
