import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../services/auth.service';
import { FirebaseService } from '../services/firebase.service';
import { CreateBandsByFansPage } from '../create-bands-by-fans/create-bands-by-fans';
import { BandsByFansDetailsPage } from '../bands-by-fans-details/bands-by-fans-details';
import { EditBandsByFansPage } from '../edit-bands-by-fans/edit-bands-by-fans';

@IonicPage()
@Component({
  selector: 'page-view-bands-by-fans',
  templateUrl: 'view-bands-by-fans.html',
})
export class ViewBandsByFansPage {

  items: Array<any>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private authService: AuthService,
    private firebaseService: FirebaseService
  ) {
  }

  goToCreateBandsByFansPage() {
    this.navCtrl.push(CreateBandsByFansPage);
  }

  ionViewWillEnter(){
    this.getData();
  }

  getData(){
    this.firebaseService.getBandsByFans()
    .then(bandsbyfans => {
      this.items = bandsbyfans;
    })
  }

  viewBandsByFansDetails(id, item) {
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
    this.navCtrl.push(BandsByFansDetailsPage, {
      data: data
    })
    console.log(data);
  }

  editBandsByFansDetails(id, item) {
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
    this.navCtrl.push(EditBandsByFansPage, {
      data: data
    })
    console.log(data);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewBandsByFansPage');
  }

}
