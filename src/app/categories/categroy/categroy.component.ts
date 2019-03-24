import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categroy',
  templateUrl: './categroy.component.html',
  styleUrls: ['./categroy.component.css']
})
export class CategroyComponent implements OnInit {
showcategory:boolean;
  constructor() { }

  ngOnInit() {
    this.showcategory=true;
  }

}
