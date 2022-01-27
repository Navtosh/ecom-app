import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductSummeryPageRoutingModule } from './product-summery-routing.module';

import { ProductSummeryPage } from './product-summery.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductSummeryPageRoutingModule
  ],
  declarations: [ProductSummeryPage]
})
export class ProductSummeryPageModule {}
