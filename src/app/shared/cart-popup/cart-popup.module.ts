import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartPopupComponent } from './cart-popup.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CartPopupComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CartPopupComponent
  ]
})
export class CartPopupModule { }
