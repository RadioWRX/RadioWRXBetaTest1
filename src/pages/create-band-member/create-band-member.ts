import { Component } from '@angular/core';
import { IonicPage, ViewController, normalizeURL, ToastController, LoadingController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { FirebaseService } from '../services/firebase.service';
import { NewBandMemberModalPage } from '../new-band-member-modal/new-band-member-modal';
import { BandMemberDetailsPage } from '../band-member-details/band-member-details';

import { ImagePicker } from '@ionic-native/image-picker';

@IonicPage()
@Component({
  selector: 'page-create-band-member',
  templateUrl: 'create-band-member.html',
})
export class CreateBandMemberPage {

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
  }

  ionViewWillLoad(){
    this.resetFields()
  }

  resetFields(){
    this.image = "./assets/imgs/profile.png";
    this.validations_form = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      biography: new FormControl('', Validators.required),
      instrument: new FormControl('', Validators.required),
      dob: new FormControl('', Validators.required)
    });
  }

  dismiss() {
   this.viewCtrl.dismiss();
  }

  onSubmit(value){
    let data = {
      name: value.name,
      biography: value.biography,
      image: this.image,
      instrument: value.instrument,
      dob: value.dob
    }
    this.firebaseService.createMember(data)
    .then(
      res => {
        this.resetFields();
        this.viewCtrl.dismiss();
      }
    )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateBandMemberPage');
  }
}
