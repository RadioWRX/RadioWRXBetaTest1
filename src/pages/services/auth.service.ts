import { Injectable } from "@angular/core";
import 'rxjs/add/operator/toPromise';
import * as firebase from 'firebase/app';
import { FirebaseService } from './firebase.service';

@Injectable()
export class AuthService {

  constructor(
    private firebaseService: FirebaseService
  ){
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        //User is signed in.
        console.log('User is signed in');
      } else {
        //No user signed in.
        console.log('User is NOT signed in');
      }
    });
  }

  doRegister(value){
   return new Promise<any>((resolve, reject) => {
     firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
     .then(
       res => resolve(res),
       err => reject(err))
   })
  }

  doLogin(value){
   return new Promise<any>((resolve, reject) => {
     firebase.auth().signInWithEmailAndPassword(value.email, value.password)
     .then(
       res => resolve(res),
       err => reject(err))
   })
  }

  doLogout(){
    return new Promise((resolve, reject) => {
      if(firebase.auth().currentUser){
        firebase.auth().signOut()
        .then(() => {
          this.firebaseService.unsubscribeOnLogOut();
          resolve();
        }).catch((error) => {
          reject();
        });
      }
    })
  }
}
