import { CartService } from 'src/app/core/services/cart/cart.service';
import { Cart } from 'src/app/core/models/cart';

export class CartBaseComponent{
    public cartList: Cart[];
    public totalPrice: number;

    constructor(protected cartService: CartService) {
        this.loadCart();
    }

    loadCart = () => {
        this.cartService.cartListSubject
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
}
