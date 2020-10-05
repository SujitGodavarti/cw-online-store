import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Product } from 'src/app/core/models/product';
import { map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]>{
    return this.http.get(`${environment.apiBaseUrl}/products.json`).pipe(
        map((res: Product[]) => res),
        catchError(error => throwError(error))
      );
  }
}
