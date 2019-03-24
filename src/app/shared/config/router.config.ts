import { Routes } from '@angular/router';
import { CoursesEpiComponent } from 'src/app/courses/courses/courses.component';
import { CategroyComponent } from 'src/app/categories/categroy/categroy.component';



export const routes:Routes=[
{path:'courses',component:CoursesEpiComponent},
{path:'Categories',component:CategroyComponent},
]