import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { QuantityControlComponent } from './quantity-control.component';

@NgModule({
  declarations: [QuantityControlComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    QuantityControlComponent
  ]
})
export class QuantityControlModule { }
