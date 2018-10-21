import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductCatalogueNumberModalPage } from './product-catalogue-number-modal';

@NgModule({
  declarations: [
    ProductCatalogueNumberModalPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductCatalogueNumberModalPage),
  ],
})
export class ProductCatalogueNumberModalPageModule {}
