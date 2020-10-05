import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/core/models/product';

@Component({
  selector: 'category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.scss']
})
export class CategoryItemComponent implements OnInit {
  @Input() product: Product
  @Output() onAddToCart = new EventEmitter();
  @Output() onViewDetails = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  viewDetails = () => {
    this.onViewDetails.emit();
  };

  addToCart = () => {
    this.onAddToCart.emit();
  }

}
