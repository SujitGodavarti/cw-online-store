import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { CategoryListComponent } from './category-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { Product } from 'src/app/core/models/product';
import { ShoppingCartComponent } from 'src/app/modules/cart/components/shopping-cart/shopping-cart.component';
import { ProductService } from 'src/app/core/services/product/product.service';
import { of } from 'rxjs';
import { CategoryItemModule } from 'src/app/shared/category-item/category-item.module';
import { Router } from '@angular/router';

describe('CategoryListComponent', () => {
  let component: CategoryListComponent;
  let fixture: ComponentFixture<CategoryListComponent>;
  let shoppingCartComponent: ShoppingCartComponent;
  let productServiceSpy: jasmine.SpyObj<ProductService>;
  let router: Router;
  let products: Product[];
  
  beforeEach(async () => {
    const spy = jasmine.createSpyObj('ProductService', ['getProducts']);
    
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        CategoryItemModule
      ],
      declarations: [ 
        CategoryListComponent,
        ShoppingCartComponent
      ],
      providers: [{ provide: productServiceSpy, useValue: spy }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    productServiceSpy = TestBed.inject(ProductService) as jasmine.SpyObj<ProductService>;
    fixture = TestBed.createComponent(CategoryListComponent);
    component = fixture.componentInstance;
    router = TestBed.get(Router);
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

  it('should display products', fakeAsync(() => { 
    fixture.detectChanges();
    spyOn(productServiceSpy, 'getProducts').and.returnValue(of<Product[]>(products));
    component.ngOnInit();
  
    tick();
    fixture.detectChanges();
    let productItems = fixture.nativeElement.querySelectorAll('div.product-layout');
    expect(productItems.length).toBe(2);
  }));

  it('add a duplicate item should increment the quantity for that item.', () => {
    component.addToCart(products[0]);
    expect(shoppingCartComponent.cartList).toEqual([{product:products[0],quantity:1}]);
    expect(shoppingCartComponent.totalPrice).toEqual(40);
    component.addToCart(products[0]);
    expect(shoppingCartComponent.cartList).toEqual([{product:products[0],quantity:2}]);
    expect(shoppingCartComponent.totalPrice).toEqual(80);
    component.addToCart(products[1]);
    expect(shoppingCartComponent.cartList).toEqual([{product:products[0],quantity:2},{product:products[1],quantity:1}]);
    expect(shoppingCartComponent.totalPrice).toEqual(108);
  });

  it('should navigate to product details page', () => {
    const navigateSpy = spyOn(router, 'navigate');

    component.viewDetails(0);
    expect(navigateSpy).toHaveBeenCalledWith(['product-detail/', 1]);
  });
  
});
