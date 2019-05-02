import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHeaderComponent } from './shared/main-header/main-header.component';
import { MainFooterComponent } from './shared/main-footer/main-footer.component';

import { CoursesModule } from './courses/courses.module';
import { RouterModule } from '@angular/router';
import { routes } from './shared/config/router.config';
import { CategoriesModule } from './categories/categories.module';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";

import { CoursesEpiComponent } from './courses/courses/courses.component';
import { RegistreComponent } from './User/registre/registre.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';




  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDyyT8iluoZ85JaDyz_e1xjv21r8IT8Bd4",
    authDomain: "myproject-95b97.firebaseapp.com",
    databaseURL: "https://myproject-95b97.firebaseio.com",
    projectId: "myproject-95b97",
    storageBucket: "myproject-95b97.appspot.com",
    messagingSenderId: "548316117980"
  };
 


@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    MainFooterComponent,
   
  
    CoursesEpiComponent,
   
  
    RegistreComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    CoursesModule,
    CategoriesModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
