import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductSummeryPage } from './product-summery.page';

const routes: Routes = [
  {
    path: '',
    component: ProductSummeryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductSummeryPageRoutingModule {}
