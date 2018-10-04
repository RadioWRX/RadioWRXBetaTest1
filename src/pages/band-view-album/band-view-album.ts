import { Component } from '@angular/core';
import { IonicPage, ViewController, NavController, normalizeURL, ToastController, NavParams, AlertController, LoadingController, ModalController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { FirebaseService } from '../services/firebase.service';
import { NewSongModalPage } from '../new-song-modal/new-song-modal';
import { EditSongPage } from '../edit-song/edit-song';

@IonicPage()
@Component({
  selector: 'page-band-view-album',
  templateUrl: 'band-view-album.html',
})
export class BandViewAlbumPage {

  //validations_form: FormGroup;
  //image: any;
  //albumItem: any;

  loading: any;

  //albumItems: Array<any>
  items: Array<any>;


  constructor(
    public navParams: NavParams,
    private navCtrl: NavController,
    private viewCtrl: ViewController,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController,
    private formBuilder: FormBuilder,
    private firebaseService: FirebaseService,
    private loadingCtrl: LoadingController,
    private modalCtrl: ModalController
  ) {
  }

  ionViewWillEnter(){
    this.getData();
  }

  getData(){
    this.firebaseService.getSongs()
    .then(songs => {
      this.items = songs;
    })
  }

  dismiss() {
   this.viewCtrl.dismiss();
  }

  editSongDetails(id, item) {
    // debugger
    let data = {
      title: item.title,
      description: item.description,
      id: id
    }
    this.navCtrl.push(EditSongPage, {
      data: data
    })
  }

  openNewSongModal(){
    let modal = this.modalCtrl.create(NewSongModalPage);
      modal.onDidDismiss(data => {
        this.getData();
      });
      modal.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BandViewAlbumPage');
  }

}
