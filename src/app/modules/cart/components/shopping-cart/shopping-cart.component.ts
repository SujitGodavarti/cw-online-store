import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/services/cart/cart.service';
import { CartBaseComponent } from 'src/app/shared/base-components/cart-base/cart-base.component';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent extends CartBaseComponent implements OnInit {

  constructor(protected cartService: CartService) { 
    super(cartService);
  }

  ngOnInit(): void {
  }

  changeQuantity = (cart,quantity) => {
      cart.quantity = quantity;
      this.cartService.reloadCart(this.cartList);
  }
}
