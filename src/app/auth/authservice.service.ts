import { Injectable } from '@angular/core';
import { Router } from  "@angular/router";
import { auth } from  'firebase/app';
import { AngularFireAuth } from  "@angular/fire/auth";
import { User } from  'firebase';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  user: User;
  constructor(public  afAuth:  AngularFireAuth, public  router:  Router,private firestore: AngularFirestore) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.user = user;
        localStorage.setItem("user", JSON.stringify(this.user.email));
      } else {
        localStorage.setItem('user', null);
      }
    })
   }

   async  login(email:  string, password:  string) {

    try {
        await  this.afAuth.auth.signInWithEmailAndPassword(email, password)
        this.router.navigate(['home']);
    } catch (e) {
        alert("Error!"  +  e.message);
    }
    }
    async logout(){
      await this.afAuth.auth.signOut();
      localStorage.removeItem('user');
      this.router.navigate(['']);
  }

  get isLoggedIn(): boolean {
    const  user  =  JSON.parse(localStorage.getItem('user'));
    return  user  !==  null;
}

canActivate():boolean{
  const  user  =  JSON.parse(localStorage.getItem('user'));
  return  user  ==  null;
}

SignUp(email, password,name,phone) {
  return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
    .then((result) => {
      this.firestore.collection('profile/').doc(result.user.uid).set({Email:email,Name:name,Phone:phone});
      window.alert("You have been successfully registered!");
      this.router.navigate(['courses']);


      console.log(result.user)
    }).catch((error) => {
      window.alert(error.message)
    })
}
}
