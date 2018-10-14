import { Component } from '@angular/core';
import { IonicPage, ViewController, NavController, normalizeURL, ToastController, NavParams, AlertController, LoadingController, ModalController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { FirebaseService } from '../services/firebase.service';
import { AddSongPage } from '../add-song/add-song';
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
  item: any;
  image: any;
  title: any;
  description: any;
  released: any;
  duration: any;
  genre: any;


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
    this.getData1();
  }

  getData1(){
    this.item = this.navParams.get('data');
    this.image = this.item.image;
    this.title = this.item.title;
    this.description = this.item.description;
    this.released = this.item.released;
    this.duration = this.item.duration;
    this.genre = this.item.genre;
    /*this.validations_form = this.formBuilder.group({
      title: new FormControl(this.item.title, Validators.required),
      description: new FormControl(this.item.description, Validators.required)
    });*/
    //console.log(this.item.image);
    //console.log(this.item.title);
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
      description: item.description
      /*songnumber: item.songnumber,
      songwriters: item.songwriters,
      songdurationminutes: item.songdurationminutes,
      songdurationseconds: item.songdurationseconds,
      publisher: item.publisher,
      bundlename: item.bundlename,
      isrccode: item.isrccode,
      labelname: item.labelname,
      productcataloguenumber: item.productcataloguenumber,
      discnumber: item.discnumber,
      grid: item.grid,
      iswc: item.iswc,
      bundleid: item.bundleid,
      physicalproductname: item.physicalproductname,
      albumid: item.albumid*/
    }
    this.navCtrl.push(EditSongPage, {
      data: data
    })
  }

  /*openNewSongModal(){
    let modal = this.modalCtrl.create(NewSongModalPage);
      modal.onDidDismiss(data => {
        this.getData();
      });
      modal.present();
  }*/

  goToAddSongPage() {
    this.navCtrl.push(AddSongPage);
  }

  playSong() {
    console.log("Song is about to play");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BandViewAlbumPage');
  }

}
