import { Component } from '@angular/core';
import { IonicPage, ViewController, normalizeURL, ToastController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { FirebaseService } from '../services/firebase.service';

@IonicPage()
@Component({
  selector: 'page-edit-band-member',
  templateUrl: 'edit-band-member.html',
})
export class EditBandMemberPage {

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
    private loadingCtrl: LoadingController
  ) {
  }

  ionViewWillLoad(){
    this.getData()
  }

  getData(){
    this.item = this.navParams.get('data');
    this.image = this.item.image;
    this.validations_form = this.formBuilder.group({
      name: new FormControl(this.item.name, Validators.required),
      biography: new FormControl(this.item.biography, Validators.required),
      instrument: new FormControl(this.item.instrument, Validators.required),
      dob: new FormControl(this.item.dob, Validators.required)
    });
    console.log(this.item);
  }

  delete() {
    let confirm = this.alertCtrl.create({
      title: 'Confirm',
      message: 'Do you want to delete ' + this.item.name + '?',
      buttons: [
        {
          text: 'No',
          handler: () => {}
        },
        {
          text: 'Yes',
          handler: () => {
            this.firebaseService.deleteMember(this.item.id)
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

  onSubmit(value){
    let data = {
      name: value.name,
      biography: value.biography,
      image: this.image,
      instrument: value.instrument,
      dob: value.dob
    }
    this.firebaseService.updateMember(this.item.id,data)
    .then(
      res => {
        this.viewCtrl.dismiss();
      }
    )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditBandMemberPage');
  }

}
