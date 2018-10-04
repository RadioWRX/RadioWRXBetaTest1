import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseService } from '../services/firebase.service';

@IonicPage()
@Component({
  selector: 'page-band-event-details',
  templateUrl: 'band-event-details.html',
})
export class BandEventDetailsPage {

  image: any;
  item: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private firebaseService: FirebaseService
  ) {
  }

  ionViewWillLoad(){
    this.getData()
  }

  getData(){
    this.item = this.navParams.get('data');
    this.image = this.item.image;
    /*this.validations_form = this.formBuilder.group({
      title: new FormControl(this.item.title, Validators.required),
      description: new FormControl(this.item.description, Validators.required)
    });*/
    console.log(this.item.image);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BandEventDetailsPage');
  }

}
