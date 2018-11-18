import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { AuthService } from '../services/auth.service';
import { FirebaseService } from '../services/firebase.service';
import { NewTaskModalPage } from '../new-task-modal/new-task-modal';
import { DetailsPage } from '../details/details';
import { LoginPage } from '../login/login';
import { ViewBandEventsPage } from '../view-band-events/view-band-events';
import { CreateAlbumPage } from '../create-album/create-album';
import { ViewBandsByFansPage } from '../view-bands-by-fans/view-bands-by-fans';
import { ViewBandMembersPage } from '../view-band-members/view-band-members';
import { ViewBandsCdFundsPage } from '../view-bands-cd-funds/view-bands-cd-funds';
import { ViewBandsVideosPage } from '../view-bands-videos/view-bands-videos';


@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})

export class MenuPage {

  items: Array<any>;

  constructor(
    private navCtrl: NavController,
    private modalCtrl: ModalController,
    private authService: AuthService,
    private firebaseService: FirebaseService
  ) {}

  ionViewWillEnter(){
    this.getData();
  }

  getData(){
    this.firebaseService.getTasks()
    .then(tasks => {
      this.items = tasks;
    })
  }

  viewDetails(id, item){
    // debugger
    let data = {
      title: item.title,
      description: item.description,
      image: item.image,
      id: id
    }
    this.navCtrl.push(DetailsPage, {
      data: data
    })
  }

  openNewUserModal(){
    let modal = this.modalCtrl.create(NewTaskModalPage);
    modal.onDidDismiss(data => {
      this.getData();
    });
    modal.present();
  }

  logout(){
    this.authService.doLogout()
    .then(res => {
      this.navCtrl.parent.parent.setRoot(LoginPage);
    })
  }

  goToViewBandMember() {
    this.navCtrl.push(ViewBandMembersPage);
  }

  goToCreateBandEvent() {
    this.navCtrl.push(ViewBandEventsPage);
  }

  goToCreateAlbum() {
    this.navCtrl.push(CreateAlbumPage);
  }

  goToCreateBandsByFans() {
    this.navCtrl.push(ViewBandsByFansPage);
  }

  goToCreateVideos() {
    this.navCtrl.push(ViewBandsVideosPage);
  }

  goToCreateCDFunds() {
    this.navCtrl.push(ViewBandsCdFundsPage);
  }

}
