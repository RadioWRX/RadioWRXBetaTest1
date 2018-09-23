import { Component } from '@angular/core';
import { IonicPage, ViewController, normalizeURL, ToastController, LoadingController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { FirebaseService } from '../services/firebase.service';

@IonicPage()
@Component({
  selector: 'page-new-song-modal',
  templateUrl: 'new-song-modal.html',
})
export class NewSongModalPage {

  validations_form: FormGroup;
  image: any;
  loading: any;
  docId: any;

  constructor(
    private viewCtrl: ViewController,
    private toastCtrl: ToastController,
    private formBuilder: FormBuilder,
    private firebaseService: FirebaseService,
    private loadingCtrl: LoadingController,
  ) {
    this.loading = this.loadingCtrl.create();
  }

  ionViewWillLoad(){
    this.resetFields()
  }

  resetFields(){
    this.image = "./assets/imgs/profile.png";
    this.validations_form = this.formBuilder.group({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    });
  }

  dismiss() {
   this.viewCtrl.dismiss();
  }

  getLocalStorageId() {
    //this.docId = localStorage.getItem('id');
    //alert(this.docId);
  }

  onSubmit(value){
    let data = {
      title: value.title,
      description: value.description,
      id: value.id
      //image: this.image
    }
    this.firebaseService.createSong(data)
    .then(
      res => {
        this.resetFields();
        this.viewCtrl.dismiss();
      }
    )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewSongModalPage');
  }

}
