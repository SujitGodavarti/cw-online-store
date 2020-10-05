import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { Product } from 'src/app/core/models/product';
import { catchError } from 'rxjs/operators';
import { CartService } from 'src/app/core/services/cart/cart.service';
import { ProductService } from 'src/app/core/services/product/product.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  products$: Observable<Product[]>;
  errorObject = null;

  constructor(private productService: ProductService,
              private cartService: CartService,
              private router: Router) { }

  ngOnInit(): void {
    this.products$ = this.productService.getProducts().pipe(
      catchError(error => {
          this.errorObject = error;
          return throwError(error);
      })
    );
  } 

  viewDetails = (index: number) => {
    this.router.navigate(['product-detail/', index + 1]);
  };

  addToCart = (product: Product) => {
      this.cartService.addToCart({product,quantity:1})
  };

}
