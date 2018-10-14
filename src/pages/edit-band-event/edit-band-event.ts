import { Component } from '@angular/core';
import { IonicPage, ViewController, normalizeURL, ToastController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { FirebaseService } from '../services/firebase.service';

@IonicPage()
@Component({
  selector: 'page-edit-band-event',
  templateUrl: 'edit-band-event.html',
})
export class EditBandEventPage {

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
      title: new FormControl(this.item.title, Validators.required),
      description: new FormControl(this.item.description, Validators.required),
      venue: new FormControl(this.item.venue, Validators.required),
      postcode: new FormControl(this.item.postcode, Validators.required),
      date: new FormControl(this.item.date, Validators.required),
      time: new FormControl(this.item.time, Validators.required),
      price: new FormControl(this.item.price, Validators.required),
      available: new FormControl(this.item.available, Validators.required)
    });
    console.log(this.item);
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
            this.firebaseService.deleteEvent(this.item.id)
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
      title: value.title,
      description: value.description,
      image: this.image,
      venue: value.venue,
      postcode: value.postcode,
      date: value.date,
      time: value.time,
      price: value.price,
      available: value.available
    }
    this.firebaseService.updateEvent(this.item.id,data)
    .then(
      res => {
        this.viewCtrl.dismiss();
      }
    )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditBandEventPage');
  }

}
