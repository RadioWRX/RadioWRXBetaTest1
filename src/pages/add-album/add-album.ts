import { Component } from '@angular/core';
import { IonicPage, ViewController, normalizeURL, ToastController, LoadingController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { FirebaseService } from '../services/firebase.service';

import { ImagePicker } from '@ionic-native/image-picker';

@IonicPage()
@Component({
  selector: 'page-add-album',
  templateUrl: 'add-album.html',
})
export class AddAlbumPage {

  validations_form: FormGroup;
  image: any;
  loading: any;

  constructor(
    private viewCtrl: ViewController,
    private toastCtrl: ToastController,
    private formBuilder: FormBuilder,
    private firebaseService: FirebaseService,
    private loadingCtrl: LoadingController,
    private imagePicker: ImagePicker
  ) {
    this.loading = this.loadingCtrl.create();
  }

  ionViewWillLoad(){
    this.resetFields()
  }

  resetFields(){
    this.image = "./assets/imgs/album.jpeg";
    this.validations_form = this.formBuilder.group({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      released: new FormControl('', Validators.required),
      totalsongs: new FormControl('', Validators.required),
      duration: new FormControl('', Validators.required),
      upcean: new FormControl('', Validators.required),
      genre: new FormControl('', Validators.required)
    });
  }

  dismiss() {
   this.viewCtrl.dismiss();
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
    this.firebaseService.createAlbum(data)
    .then(
      res => {
        this.resetFields();
        this.viewCtrl.dismiss();
      }
    )
  }

  openImagePicker(){
    this.imagePicker.hasReadPermission()
    .then((result) => {
      if(result == false){
        // no callbacks required as this opens a popup which returns async
        this.imagePicker.requestReadPermission();
      }
      else if(result == true){
        this.imagePicker.getPictures({
          maximumImagesCount: 1
        }).then(
          (results) => {
            for (var i = 0; i < results.length; i++) {
              this.uploadImageToFirebase(results[i]);
            }
          }, (err) => console.log(err)
        );
      }
    }, (err) => {
      console.log(err);
    });
  }

  uploadImageToFirebase(image){
    this.loading.present();
    image = normalizeURL(image);
    let randomId = Math.random().toString(36).substr(2, 5);

    //uploads img to firebase storage
    this.firebaseService.uploadImage(image, randomId)
    .then(photoURL => {
      this.image = photoURL;
      this.loading.dismiss();
      let toast = this.toastCtrl.create({
        message: 'Image was updated successfully',
        duration: 3000
      });
      toast.present();
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddAlbumPage');
  }

}
