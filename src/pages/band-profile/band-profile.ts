import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';

import { AuthService } from '../services/auth.service';

/**
 * Generated class for the BandProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-band-profile',
  templateUrl: 'band-profile.html',
})
export class BandProfilePage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private authService: AuthService) {
  }

  logOut() : void {
    this.authService.doLogout()
    .then((data: any) =>{
      this.navCtrl.parent.parent.setRoot(LoginPage);
    })
    .catch((error: any) =>{
      console.dir(error)
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BandProfilePage');
  }

}
