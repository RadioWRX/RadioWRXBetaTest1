import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, NavParams } from 'ionic-angular';
import { AuthService } from '../services/auth.service';
import { FirebaseService } from '../services/firebase.service';
import { AddAlbumPage } from '../add-album/add-album';
import { BandViewAlbumPage } from '../band-view-album/band-view-album';
import { EditAlbumPage } from '../edit-album/edit-album';

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

  addNewAlbum() {
    this.navCtrl.push(AddAlbumPage);
  }

  viewAlbumDetails(id, item) {
    //refId = 'shit';
    // debugger
    let data = {
      title: item.title,
      description: item.description,
      image: item.image,
      released: item.released,
      totalsongs: item.totalsongs,
      duration: item.duration,
      upcean: item.upcean,
      genre: item.genre
      //id: id
    }
    localStorage.setItem("id", id);
    //alert(id);
    this.navCtrl.push(BandViewAlbumPage, {
      data: data
    })
    //console.log(data);
  }

  editAlbumDetails(id, item) {
    //refId = 'shit';
    // debugger
    let data = {
      title: item.title,
      description: item.description,
      image: item.image,
      released: item.released,
      totalsongs: item.totalsongs,
      duration: item.duration,
      upcean: item.upcean,
      genre: item.genre
      //id: id
    }
    localStorage.setItem("id", id);
    //alert(id);
    this.navCtrl.push(EditAlbumPage, {
      data: data
    })
    console.log(data);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateAlbumPage');
  }

}
