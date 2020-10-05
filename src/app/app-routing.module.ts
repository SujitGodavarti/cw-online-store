import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'category-list', loadChildren: () => import('./modules/category/category.module').then(m => m.CategoryModule)},
  { path: 'product-detail', loadChildren: () => import('./modules/product/product.module').then(m => m.ProductModule)},
  { path: 'shopping-cart', loadChildren: () => import('./modules/cart/cart.module').then(m => m.CartModule)},
  { path: '',   redirectTo: 'category-list', pathMatch: 'full' },
  { path: '**', redirectTo: 'category-list' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
