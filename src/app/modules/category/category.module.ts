import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryRoutingModule } from './category-routing.module';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { CategoryItemModule } from 'src/app/shared/category-item/category-item.module';


@NgModule({
  declarations: [CategoryListComponent],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    CategoryItemModule
  ]
})
export class CategoryModule { }
