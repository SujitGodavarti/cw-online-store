import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartRoutingModule } from './cart-routing.module';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { CartItemModule } from 'src/app/shared/cart-item/cart-item.module';


@NgModule({
  declarations: [ShoppingCartComponent],
  imports: [
    CommonModule,
    CartRoutingModule,
    CartItemModule
  ]
})
export class CartModule { }
