import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, NavParams } from 'ionic-angular';
import { AuthService } from '../services/auth.service';
import { FirebaseService } from '../services/firebase.service';
import { NewBandMemberModalPage } from '../new-band-member-modal/new-band-member-modal';
import { BandMemberDetailsPage } from '../band-member-details/band-member-details';

/**
 * Generated class for the CreateBandMemberPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-band-member',
  templateUrl: 'create-band-member.html',
})
export class CreateBandMemberPage {

  items: Array<any>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private modalCtrl: ModalController,
    private authService: AuthService,
    private firebaseService: FirebaseService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateBandMemberPage');
  }

  ionViewWillEnter(){
    this.getData();
  }

  getData(){
    this.firebaseService.getMembers()
    .then(members => {
      this.items = members;
    })
  }

  viewMemberDetails(id, item) {
    // debugger
    let data = {
      title: item.title,
      description: item.description,
      image: item.image,
      id: id
    }
    this.navCtrl.push(BandMemberDetailsPage, {
      data: data
    })
  }

  openNewBandMemberModal(){
    let modal = this.modalCtrl.create(NewBandMemberModalPage);
      modal.onDidDismiss(data => {
        this.getData();
      });
      modal.present();
  }

}
