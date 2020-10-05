import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItemComponent } from './cart-item.component';
import { QuantityControlModule } from '../quantity-control/quantity-control.module';

@NgModule({
  declarations: [CartItemComponent],
  imports: [
    CommonModule,
    QuantityControlModule
  ],
  exports: [
    CartItemComponent
  ]
})
export class CartItemModule { }
