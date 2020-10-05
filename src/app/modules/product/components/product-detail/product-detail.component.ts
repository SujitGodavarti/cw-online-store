import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/core/services/product/product.service';
import { CartService } from 'src/app/core/services/cart/cart.service';
import { Product } from 'src/app/core/models/product';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  quantity: number = 1;
  onDestroy$: Subject<void> = new Subject<void>();

  constructor(private route: ActivatedRoute,
              private productService: ProductService,
              private cartService: CartService) { }

  ngOnInit(): void {
    this.route.params
          .pipe(takeUntil(this.onDestroy$))
          .subscribe(res => {
              this.getProduct(res.id);
          })
  }

  getProduct = (id) => {
      this.productService.getProducts()
          .pipe(takeUntil(this.onDestroy$))
          .subscribe(res => {
              this.product = res[id-1];
          })
  };

  changeQuantity = (newQuantity:number) => {
    this.quantity = newQuantity;
  };

  addToCart = (product) => {
      if(this.quantity) this.cartService.addToCart({product,quantity:this.quantity})
  };

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

}
