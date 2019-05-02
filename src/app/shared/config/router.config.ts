import { Routes } from '@angular/router';
import { CoursesEpiComponent } from 'src/app/courses/courses/courses.component';
import { CategroyComponent } from 'src/app/categories/categroy/categroy.component';
import { RegistreComponent } from 'src/app/User/registre/registre.component';

import { AuthserviceService } from 'src/app/auth/authservice.service';



export const routes:Routes=[
{path:'courses',component:CoursesEpiComponent},
{path:'Categories',component:CategroyComponent},
{path:'Registration',component:RegistreComponent , canActivate :[AuthserviceService]},
{path:'', redirectTo:'courses',pathMatch:'full'}

]