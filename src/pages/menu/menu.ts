import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { AuthService } from '../services/auth.service';
import { FirebaseService } from '../services/firebase.service';
import { NewTaskModalPage } from '../new-task-modal/new-task-modal';
import { DetailsPage } from '../details/details';
import { LoginPage } from '../login/login';
import { CreateBandMemberPage } from '../create-band-member/create-band-member';
import { CreateBandEventPage } from '../create-band-event/create-band-event';
import { CreateAlbumPage } from '../create-album/create-album';


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

  goToCreateBandMember() {
    this.navCtrl.push(CreateBandMemberPage);
  }

  goToCreateBandEvent() {
    this.navCtrl.push(CreateBandEventPage);
  }

  goToCreateAlbum() {
    this.navCtrl.push(CreateAlbumPage);
  }

}
