import { Component } from '@angular/core';
import { IonicPage, ViewController, normalizeURL, ToastController, NavParams, AlertController, LoadingController, ModalController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { FirebaseService } from '../services/firebase.service';

@IonicPage()
@Component({
  selector: 'page-edit-song',
  templateUrl: 'edit-song.html',
})
export class EditSongPage {

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
      songnumber: new FormControl(this.item.songnumber, Validators.required),
      songwriters: new FormControl(this.item.songwriters, Validators.required),
      songdurationminutes: new FormControl(this.item.songdurationminutes, Validators.required),
      songdurationseconds: new FormControl(this.item.songdurationseconds, Validators.required),
      publisher: new FormControl(this.item.publisher, Validators.required),
      bundlename: new FormControl(this.item.bundlename, Validators.required),
      isrccode: new FormControl(this.item.isrccode, Validators.required),
      labelname: new FormControl(this.item.labelname, Validators.required),
      productcataloguenumber: new FormControl(this.item.productcataloguenumber, Validators.required),
      discnumber: new FormControl(this.item.discnumber, Validators.required),
      grid: new FormControl(this.item.grid, Validators.required),
      iswc: new FormControl(this.item.iswc, Validators.required),
      bundleid: new FormControl(this.item.bundleid, Validators.required),
      physicalproductname: new FormControl(this.item.physicalproductname, Validators.required),
      albumid: new FormControl(this.item.albumid, Validators.required)
    });
    console.log(this.item);
  }

  onSubmit(value){
    let data = {
      title: value.title,
      songnumber: value.songnumber,
      songwriters: value.songwriters,
      songdurationminutes: value.songdurationminutes,
      songdurationseconds: value.songdurationseconds,
      publisher: value.publisher,
      bundlename: value.bundlename,
      isrccode: value.isrccode,
      labelname: value.labelname,
      productcataloguenumber: value.productcataloguenumber,
      discnumber: value.discnumber,
      grid: value.grid,
      iswc: value.iswc,
      bundleid: value.bundleid,
      physicalproductname: value.physicalproductname,
      albumid: value.albumid
    }
    this.firebaseService.updateSong(this.item.id,data)
    .then(
      res => {
        this.viewCtrl.dismiss();
      }
    )
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
            this.firebaseService.deleteSong(this.item.id)
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

  // This will provide an explanation as to what a Publisher is in the usic business.
  openPublisherModal() {
    alert("Let's open the Publisher Modal.");
  }

  // This will explain what a Bundle Name is.
  openBundleNameModal() {
    alert("Let's open the Bundle Name Modal");
  }

  // This will explain what an ISRC code is and how to obtain one.
  openISRCCodeModal() {
    alert("Let's open the ISRC Code Modal.");
  }

  // This will explaing what a Label Name is.
  openLabelNameModal() {
    alert("Let's open the Label Name Modal");
  }

  // This will explain what a Product Catalogue Number is
  openProductCatalogueNumberModal() {
    alert("Let's open the Product Catalogue Number Modal.");
  }

  // This will explain what a Disc Number is
  openDiscNumberModal() {
    alert(" Let's open the Disc Number Modal.");
  }

  // This will explain what a GRID is
  openGRIDModal() {
    alert("Let's open the GRID Modal");
  }

  // This will explain what an ISWC is
  openISWCModal() {
    alert("Let's open the ISWC Modal");
  }

  // This will explain what a Bundle Id
  openBundleIdModal() {
    alert("Let's open the Bundle Id Modal");
  }

  // This will explain what a Physical Product Name is.
  openPhysicalProductNameModal() {
    alert("Let;s open the Physical Product Name Modal");
  }

  openAlbumIdModal() {
    alert("Let's open the Album Id Modal.");
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad EditSongPage');
  }

}
