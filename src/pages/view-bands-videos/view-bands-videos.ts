import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddVideoPage } from '../add-video/add-video';

@IonicPage()
@Component({
  selector: 'page-view-bands-videos',
  templateUrl: 'view-bands-videos.html',
})
export class ViewBandsVideosPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) {
  }

  goToCreateBandsVideos() {
    this.navCtrl.push(AddVideoPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewBandsVideosPage');
  }


}
