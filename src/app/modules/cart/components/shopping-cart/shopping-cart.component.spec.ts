import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShoppingCartComponent } from './shopping-cart.component';
import { Product } from 'src/app/core/models/product';

describe('ShoppingCartComponent', () => {
  let component: ShoppingCartComponent;
  let fixture: ComponentFixture<ShoppingCartComponent>;
  let products: Product[];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        ShoppingCartComponent 
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
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

  it('change quantity of first product.', () => {
    component.cartList = [{product:products[0],quantity:1},{product:products[1],quantity:2}];
    component.changeQuantity(component.cartList[0],2);
    expect(component.cartList).toEqual([{product:products[0],quantity:2},{product:products[1],quantity:2}]);
    expect(component.totalPrice).toEqual(136);
  });

  it('change quantity of second product.', () => {
    component.cartList = [{product:products[0],quantity:5},{product:products[1],quantity:2}];
    component.changeQuantity(component.cartList[1],1);
    expect(component.cartList).toEqual([{product:products[0],quantity:5},{product:products[1],quantity:1}]);
    expect(component.totalPrice).toEqual(228);
  });

  it('remove item.', () => {
    component.cartList = [{product:products[0],quantity:2},{product:products[1],quantity:2}];
    component.changeQuantity(component.cartList[1],3);
    component.removeFromCart(1);
    expect(component.cartList).toEqual([{product:products[0],quantity:2}]);
    expect(component.totalPrice).toEqual(80);
  });
});
