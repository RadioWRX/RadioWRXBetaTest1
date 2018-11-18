import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddCdFundsPage } from '../add-cd-funds/add-cd-funds';

@IonicPage()
@Component({
  selector: 'page-view-bands-cd-funds',
  templateUrl: 'view-bands-cd-funds.html',
})
export class ViewBandsCdFundsPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewBandsCdFundsPage');
  }

  goToCreateBandsCDFunds() {
    this.navCtrl.push(AddCdFundsPage);
  }

}
