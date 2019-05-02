import { Component, OnInit, Input } from '@angular/core';
import { Category } from 'src/app/shared/models/Category';

@Component({
  selector: 'app-item-category',
  templateUrl: './item-category.component.html',
  styleUrls: ['./item-category.component.css']
})
export class ItemCategoryComponent implements OnInit {
@Input() category:Category;
  constructor() { }

  ngOnInit() {
  }

}
