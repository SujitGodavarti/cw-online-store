import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductDetailComponent } from './product-detail.component';
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ShoppingCartComponent } from 'src/app/modules/cart/components/shopping-cart/shopping-cart.component';
import { Product } from 'src/app/core/models/product';

describe('ProductDetailComponent', () => {
  let component: ProductDetailComponent;
  let fixture: ComponentFixture<ProductDetailComponent>;
  let shoppingCartComponent: ShoppingCartComponent;
  let products: Product[];
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      declarations: [ 
        ProductDetailComponent,
        ShoppingCartComponent
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    let f = TestBed.createComponent(ShoppingCartComponent);
    shoppingCartComponent = f.componentInstance;
    products = [
      {
        "title": "Mock Product 1",
        "brand": "Mock brand",
        "price": 40,
        "description": "This is a testing product.",
        "image": "mock1.jpg"
      },
      {
        "title": "Mock Product 2",
        "brand": "Mock brand",
        "price": 28,
        "description": "This is a testing product.",
        "image": "mock2.jpg"
      }
    ];
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Add first item to the cart.', () => {
    component.addToCart(products[0]);
    expect(shoppingCartComponent.cartList).toEqual([{product:products[0],quantity:1}]);
    expect(shoppingCartComponent.totalPrice).toEqual(40);
  });

  it('When quantity is null.', () => {
    component.quantity = null;
    component.addToCart(products[0]);
    expect(shoppingCartComponent.cartList).toEqual([]);
    expect(shoppingCartComponent.totalPrice).toEqual(0);
  });

  it('Add duplicate item.', () => {
    component.quantity = 2;
    component.addToCart(products[0]);
    expect(shoppingCartComponent.cartList).toEqual([{product:products[0],quantity:2}]);
    expect(shoppingCartComponent.totalPrice).toEqual(80);
    component.quantity = 3;
    component.addToCart(products[0]);
    expect(shoppingCartComponent.cartList).toEqual([{product:products[0],quantity:5}]);
    expect(shoppingCartComponent.totalPrice).toEqual(200);
  });
});
