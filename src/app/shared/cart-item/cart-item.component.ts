import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Cart } from 'src/app/core/models/cart';

@Component({
  selector: 'cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  @Input() cart: Cart
  @Output() onChangeQuantity = new EventEmitter();
  @Output() onRemoveFromCart = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  changeQuantity = (quantity: number) => {
    this.onChangeQuantity.emit(quantity);
  };

  removeFromCart = () => {
    this.onRemoveFromCart.emit();
  }

}
