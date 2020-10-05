import { Component, OnInit, HostBinding, ElementRef, HostListener } from '@angular/core';
import { CartService } from 'src/app/core/services/cart/cart.service';
import { CartBaseComponent } from '../base-components/cart-base/cart-base.component';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'cart-popup',
  templateUrl: './cart-popup.component.html',
  styleUrls: ['./cart-popup.component.scss']
})
export class CartPopupComponent extends CartBaseComponent implements OnInit {
  @HostBinding("class.visible") isVisible: boolean = false;

  @HostListener('document:click', ['$event'])
  onPageClick = (event) => {
      if (this.isVisible && !this.eleref.nativeElement.contains(event.target) && event.target.className !== 'cart-remove'){
          this.cartService.toggleCart();
      }
  }

  onDestroy$: Subject<void> = new Subject<void>();

  constructor(protected cartService: CartService,
              private eleref: ElementRef) {
                super(cartService);
  }

  ngOnInit(): void {
        this.cartService.toggleCartSubject
            .pipe(takeUntil(this.onDestroy$))
            .subscribe(res => {
                this.isVisible = res;
            });
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

}
