import { TestBed } from '@angular/core/testing';
import { ProductService } from './product.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';
import { Product } from '../../models/product';

describe('ProductService', () => {
  let productService: ProductService;
  let httpTestingController: HttpTestingController;
  let products: Product[];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ ProductService ]
    });
    products = [
      {
        "title": "Mock Product 1",
        "brand": "Mock brand 1",
        "price": 40,
        "description": "This is a testing product.",
        "image": "mock1.jpg"
      },
      {
        "title": "Mock Product 2",
        "brand": "Mock brand 1",
        "price": 28,
        "description": "This is a testing product.",
        "image": "mock2.jpg"
      },
      {
        "title": "Mock Product 3",
        "brand": "Mock brand 2",
        "price": 54,
        "description": "This is a testing product.",
        "image": "mock3.jpg"
      }
    ];

    httpTestingController = TestBed.inject(HttpTestingController);
    productService = TestBed.inject(ProductService);
  });

  it('should create', () => {
    expect(productService).toBeTruthy();
  });

  it('should return data', () => {
    productService.getProducts().subscribe(res => {
        expect(res.length).toBe(3);
        expect(res).toEqual(products);
    });

    const req = httpTestingController.expectOne(`${environment.apiBaseUrl}/products.json`);
    expect(req.request.method).toBe("GET");
    req.flush(products);
  });
});
