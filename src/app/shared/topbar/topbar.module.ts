import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './topbar.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CartPopupModule } from '../cart-popup/cart-popup.module';

@NgModule({
  declarations: [TopbarComponent],
  imports: [
    CommonModule,
    CartPopupModule,
    FontAwesomeModule,
    RouterModule
  ],
  exports: [
    TopbarComponent
  ]
})
export class TopbarModule { }
