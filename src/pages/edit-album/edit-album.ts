import { Component } from '@angular/core';
import { IonicPage, ViewController, normalizeURL, ToastController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { FirebaseService } from '../services/firebase.service';

import { ImagePicker } from '@ionic-native/image-picker';

@IonicPage()
@Component({
  selector: 'page-edit-album',
  templateUrl: 'edit-album.html',
})
export class EditAlbumPage {

  validations_form: FormGroup;
  image: any;
  item: any;
  loading: any;

  constructor(
    public navParams: NavParams,
    private viewCtrl: ViewController,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController,
    private formBuilder: FormBuilder,
    private firebaseService: FirebaseService,
    private loadingCtrl: LoadingController,
    private imagePicker: ImagePicker
  ) {
    this.loading = this.loadingCtrl.create();
  }

  ionViewWillLoad(){
    this.getData()
  }

  getData(){
    this.item = this.navParams.get('data');
    this.image = this.item.image;
    this.validations_form = this.formBuilder.group({
      title: new FormControl(this.item.title, Validators.required),
      description: new FormControl(this.item.description, Validators.required),
      released: new FormControl(this.item.released, Validators.required),
      totalsongs: new FormControl(this.item.totalsongs, Validators.required),
      duration: new FormControl(this.item.duration, Validators.required),
      upcean: new FormControl(this.item.upcean, Validators.required),
      genre: new FormControl(this.item.genre, Validators.required)
    });
    console.log(this.item.image);
  }

  onSubmit(value){
    let data = {
      title: value.title,
      description: value.description,
      image: this.image,
      released: value.released,
      totalsongs: value.totalsongs,
      duration: value.duration,
      upcean: value.upcean,
      genre: value.genre
    }
    this.firebaseService.updateAlbum(this.item.id,data)
    .then(
      res => {
        this.viewCtrl.dismiss();
      }
    )
  }

  delete() {
    let confirm = this.alertCtrl.create({
      title: 'Confirm',
      message: 'Do you want to delete ' + this.item.title + '?',
      buttons: [
        {
          text: 'No',
          handler: () => {}
        },
        {
          text: 'Yes',
          handler: () => {
            this.firebaseService.deleteAlbum(this.item.id)
            .then(
              res => this.viewCtrl.dismiss(),
              err => console.log(err)
            )
          }
        }
      ]
    });
    confirm.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditAlbumPage');
  }

  openImagePicker(options) {
    this.imagePicker.getPictures(options).then((results) => {
    for (var i = 0; i < results.length; i++) {
        console.log('Image URI: ' + results[i]);
    }
  }, (err) => { });
  }

}
