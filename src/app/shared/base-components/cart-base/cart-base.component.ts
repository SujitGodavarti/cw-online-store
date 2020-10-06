import { Component } from '@angular/core';
import { CartService } from 'src/app/core/services/cart/cart.service';
import { Cart } from 'src/app/core/models/cart';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
    template: `
        <div>Cart Base Component</div>
    `
})
export class CartBaseComponent {
    public cartList: Cart[];
    public totalPrice: number;
    onDestroy$: Subject<void> = new Subject<void>();

    constructor(protected cartService: CartService) {
        this.loadCart();
    }

    loadCart = () => {
        this.cartService.cartListSubject
            .pipe(takeUntil(this.onDestroy$))
            .subscribe(res => {
                this.cartList = res;
                let total = 0;
                for(let cart of this.cartList) {
                    total += cart.product.price * cart.quantity;
                }
                this.totalPrice = total;
            })
    };

    removeFromCart = index => {
        this.cartService.removeCart(index);
    };

    ngOnDestroy(): void {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }
}
