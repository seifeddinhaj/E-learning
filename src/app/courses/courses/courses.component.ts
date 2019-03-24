import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesEpiComponent implements OnInit {
  showCourses:boolean;
  constructor() { }

  ngOnInit() {
    this.showCourses = false;
  }

}
