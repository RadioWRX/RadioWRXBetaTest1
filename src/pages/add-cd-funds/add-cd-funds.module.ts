import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddCdFundsPage } from './add-cd-funds';

@NgModule({
  declarations: [
    AddCdFundsPage,
  ],
  imports: [
    IonicPageModule.forChild(AddCdFundsPage),
  ],
})
export class AddCdFundsPageModule {}
