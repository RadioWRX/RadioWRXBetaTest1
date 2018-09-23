import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, NavParams } from 'ionic-angular';
import { AuthService } from '../services/auth.service';
import { FirebaseService } from '../services/firebase.service';
import { NewBandEventModalPage } from '../new-band-event-modal/new-band-event-modal';
import { BandEventDetailsPage } from '../band-event-details/band-event-details';

@IonicPage()
@Component({
  selector: 'page-create-band-event',
  templateUrl: 'create-band-event.html',
})
export class CreateBandEventPage {

  items: Array<any>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private modalCtrl: ModalController,
    private authService: AuthService,
    private firebaseService: FirebaseService) {
  }

  ionViewWillEnter(){
    this.getData();
  }

  getData(){
    this.firebaseService.getEvents()
    .then(events => {
      this.items = events;
    })
  }

  viewEventDetails(id, item) {
    // debugger
    let data = {
      title: item.title,
      description: item.description,
      image: item.image,
      id: id
    }
    this.navCtrl.push(BandEventDetailsPage, {
      data: data
    })
  }

  openNewBandEventModal(){
    let modal = this.modalCtrl.create(NewBandEventModalPage);
      modal.onDidDismiss(data => {
        this.getData();
      });
      modal.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateBandEventPage');
  }

}
