import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { QuantityControlModule } from 'src/app/shared/quantity-control/quantity-control.module';


@NgModule({
  declarations: [ProductDetailComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    QuantityControlModule
  ]
})
export class ProductModule { }
