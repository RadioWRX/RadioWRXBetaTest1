import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../services/auth.service';
import { FirebaseService } from '../services/firebase.service';
import { BandMemberDetailsPage } from '../band-member-details/band-member-details';
import { EditBandMemberPage } from '../edit-band-member/edit-band-member';
import { CreateBandMemberPage } from '../create-band-member/create-band-member';

@IonicPage()
@Component({
  selector: 'page-view-band-members',
  templateUrl: 'view-band-members.html',
})
export class ViewBandMembersPage {

  items: Array<any>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private authService: AuthService,
    private firebaseService: FirebaseService
  ) {
  }

  goToCreateBandMembersPage() {
    this.navCtrl.push(CreateBandMemberPage);
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

  viewBandMemberDetails(id, item) {
    //refId = 'shit';
    // debugger
    let data = {
      name: item.name,
      biography: item.biography,
      image: item.image,
      instrument: item.instrument,
      dob: item.dob
      //id: item.id
    }
    localStorage.setItem("id", id);
    //alert(id);
    this.navCtrl.push(BandMemberDetailsPage, {
      data: data
    })
    console.log(data);
  }

  editBandMemberDetails(id, item) {
    //refId = 'shit';
    // debugger
    let data = {
      name: item.name,
      biography: item.biography,
      image: item.image,
      instrument: item.instrument,
      dob: item.dob
      //id: item.id
    }
    localStorage.setItem("id", id);
    //alert(id);
    this.navCtrl.push(EditBandMemberPage, {
      data: data
    })
    console.log(data);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewBandMembersPage');
  }

}
