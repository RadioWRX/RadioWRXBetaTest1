import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseService } from '../services/firebase.service';
import { GoogleMaps, GoogleMap, Environment, GoogleMapOptions, Marker, GoogleMapsEvent } from '@ionic-native/google-maps';

@IonicPage()
@Component({
  selector: 'page-band-event-details',
  templateUrl: 'band-event-details.html',
})
export class BandEventDetailsPage {

  image: any;
  item: any;

  map: GoogleMap;

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
    this.loadMap();
    console.log('ionViewDidLoad BandEventDetailsPage');
  }

  loadMap() {
    // This code is necessary for browser
    Environment.setEnv({
      'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyDwcXJsRXdhwZBKGOT1Il0kBmbCA8ofgsk',
      'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyDwcXJsRXdhwZBKGOT1Il0kBmbCA8ofgsk'
    });

    let mapOptions: GoogleMapOptions = {
      camera: {
         target: {
           lat: 43.0741904,
           lng: -89.3809802
         },
         zoom: 18,
         tilt: 30
       }
    };


    this.map = GoogleMaps.create('map_canvas', mapOptions);

    let marker: Marker = this.map.addMarkerSync({
      title: 'Ionic',
      icon: 'blue',
      animation: 'DROP',
      position: {
        lat: 43.0741904,
        lng: -89.3809802
      }
    });
    marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
      alert('clicked');
    })
  }
}
