import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { Observable } from 'rxjs/Observable';
import firebase from 'firebase';
import { environment } from '../environment/environment';
import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;
  isLoggedIn$: Observable<boolean>;

  constructor(platform: Platform, statusBar: StatusBar) {
    platform.ready().then(() => {

      const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
        if(user) {
          //User is signed in.
          this.rootPage = TabsPage;
          unsubscribe();
          console.log('User is signed in');
        } else {
          //No user signed in.
          this.rootPage = LoginPage;
          unsubscribe();
          console.log('User is NOT signed in');
        }
      });
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
    });
    firebase.initializeApp(environment.firebase);
  }
}
