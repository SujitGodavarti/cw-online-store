import { Component, OnInit } from '@angular/core';
import { faCaretDown, faBars, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { CartService } from 'src/app/core/services/cart/cart.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {
  public collapse: boolean = false;
  public cart_num:number;
  faCaretDown = faCaretDown;
  faBars = faBars;
  faShoppingCart = faShoppingCart;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.cartListSubject
        .subscribe(res => {
            this.cart_num = res.length;
        })
  }
  toggleCartPopup = (event) => {
      event.preventDefault();
      event.stopPropagation();
      this.cartService.toggleCart();
  }

}
