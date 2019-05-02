import { Component, OnInit } from '@angular/core';
import { CatServiceService } from 'src/app/shared/services/cat-service.service';

@Component({
  selector: 'app-categroy',
  templateUrl: './categroy.component.html',
  styleUrls: ['./categroy.component.css']
})
export class CategroyComponent implements OnInit {
showcategory:boolean;
private categories;
  constructor( private catserv:CatServiceService) {

    this.catserv.getCategories().subscribe(res=>{
      this.categories=res;
    });
   }

  ngOnInit() {
    this.showcategory=true;
  }

}
