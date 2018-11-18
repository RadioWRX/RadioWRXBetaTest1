import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditCdFundsPage } from './edit-cd-funds';

@NgModule({
  declarations: [
    EditCdFundsPage,
  ],
  imports: [
    IonicPageModule.forChild(EditCdFundsPage),
  ],
})
export class EditCdFundsPageModule {}
