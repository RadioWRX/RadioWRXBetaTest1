import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, NavParams } from 'ionic-angular';
import { AuthService } from '../services/auth.service';
import { FirebaseService } from '../services/firebase.service';
import { NewAlbumModalPage } from '../new-album-modal/new-album-modal';
import { BandViewAlbumPage } from '../band-view-album/band-view-album';

@IonicPage()
@Component({
  selector: 'page-create-album',
  templateUrl: 'create-album.html',
})
export class CreateAlbumPage {

  items: Array<any>;

  refId: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private modalCtrl: ModalController,
    private authService: AuthService,
    private firebaseService: FirebaseService) {
  }

  ionViewWillEnter(){
    this.getData();
  }

  getData(){
    this.firebaseService.getAlbums()
    .then(albums => {
      this.items = albums;
    })
  }

  viewAlbumDetails(id, item) {
    //refId = 'shit';
    // debugger
    let data = {
      title: item.title,
      description: item.description,
      //image: item.image,
      //id: id
    }
    localStorage.setItem("id", id);
    //alert(id);
    this.navCtrl.push(BandViewAlbumPage, {
      data: data
    })
    console.log(data);
  }

  openNewAlbumModal(){
    let modal = this.modalCtrl.create(NewAlbumModalPage);
      modal.onDidDismiss(data => {
        this.getData();
      });
      modal.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateAlbumPage');
  }

}
