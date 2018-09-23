import { Component } from '@angular/core';
import { IonicPage, ViewController, normalizeURL, ToastController, NavParams, AlertController, LoadingController, ModalController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { FirebaseService } from '../services/firebase.service';
import { NewSongModalPage } from '../new-song-modal/new-song-modal';

/**
 * Generated class for the BandViewAlbumPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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
