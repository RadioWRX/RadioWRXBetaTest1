import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../services/auth.service';
import { FirebaseService } from '../services/firebase.service';
import { BandEventDetailsPage } from '../band-event-details/band-event-details';
import { CreateBandEventPage } from '../create-band-event/create-band-event';
import { EditBandEventPage } from '../edit-band-event/edit-band-event';

@IonicPage()
@Component({
  selector: 'page-view-band-events',
  templateUrl: 'view-band-events.html',
})
export class ViewBandEventsPage {

  items: Array<any>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private authService: AuthService,
    private firebaseService: FirebaseService
  ) {
  }

  ionViewWillEnter(){
    this.getData();
  }

  goToCreateBandEventPage() {
    this.navCtrl.push(CreateBandEventPage);
  }

  getData(){
    this.firebaseService.getEvents()
    .then(events => {
      this.items = events;
    })
  }

  viewBandEventDetails(id, item) {
    //refId = 'shit';
    // debugger
    let data = {
      title: item.title,
      description: item.description,
      image: item.image,
      //id: item.id
    }
    localStorage.setItem("id", id);
    //alert(id);
    this.navCtrl.push(BandEventDetailsPage, {
      data: data
    })
    console.log(data);
  }

  editBandEventDetails(id, item) {
    //refId = 'shit';
    // debugger
    let data = {
      title: item.title,
      description: item.description,
      image: item.image,
      //id: item.id
    }
    localStorage.setItem("id", id);
    //alert(id);
    this.navCtrl.push(EditBandEventPage, {
      data: data
    })
    console.log(data);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewBandEventsPage');
  }

}
