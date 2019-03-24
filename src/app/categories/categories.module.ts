import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategroyComponent } from './categroy/categroy.component';
import { ItemCategoryComponent } from './item-category/item-category.component';

@NgModule({
  declarations: [CategroyComponent, ItemCategoryComponent],
  imports: [
    CommonModule
  ]
})
export class CategoriesModule { }
