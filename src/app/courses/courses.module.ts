import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  CoursesEpiComponent } from './courses/courses.component';
import { ItemCourseComponent } from './item-course/item-course.component';


@NgModule({
  declarations: [CoursesEpiComponent, ItemCourseComponent],
  imports: [
    CommonModule
  ]
})
export class CoursesModule { }
