import { Injectable } from '@angular/core';
import { Course } from '../models/Course';
import { Category } from '../models/Category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatServiceService {
  private cat: Array<Category>;
  constructor() { }


  getCategories(): any{
    this.cat=
    [{
      id:1,
      name:"IT Development",
      description:"Lorem ipsum dolor sit amet, consectetur ",
      image:"assets/img/categories/1.jpg",
      nbCourses:120
    
    },
    {
      id:2,
      name:"Web Design",
      description:"Lorem ipsum dolor sit amet, consectetur ",
      image:"assets/img/categories/2.jpg",
      nbCourses:70
    
    },
    {
      id:3,
      name:"Illustration & Drawing",
      description:"Lorem ipsum dolor sit amet, consectetur ",
      image:"assets/img/categories/3.jpg",
      nbCourses:12
    
    },
    {
      id:4,
      name:"Social Media",
      description:"Lorem ipsum dolor sit amet, consectetur ",
      image:"assets/img/categories/4.jpg",
      nbCourses:120
    
    },
    {
      id:5,
      name:"Photoshop",
      description:"Lorem ipsum dolor sit amet, consectetur ",
      image:"assets/img/categories/5.jpg",
      nbCourses:222
    
    },
    {
      id:6,
      name:"Cryptocurrencies",
      description:"Lorem ipsum dolor sit amet, consectetur ",
      image:"assets/img/categories/6.jpg",
      nbCourses:22
    
    }
  ]
  const catObservable =new Observable( observer =>{
    setTimeout(()=>{
      observer.next(this.cat);
    }, 10);
  });
  return catObservable;
  
  
  } 
}
