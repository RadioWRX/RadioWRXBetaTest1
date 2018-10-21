import { Component } from '@angular/core';
import { IonicPage, ViewController, normalizeURL, ToastController, NavParams, AlertController, LoadingController, ModalController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { FirebaseService } from '../services/firebase.service';
import { PublisherModalPage } from '../publisher-modal/publisher-modal';
import { BundleNameModalPage } from '../bundle-name-modal/bundle-name-modal';
import { IsrcCodeModalPage } from '../isrc-code-modal/isrc-code-modal';
import { LabelNameModalPage } from '../label-name-modal/label-name-modal';
import { ProductCatalogueNumberModalPage } from '../product-catalogue-number-modal/product-catalogue-number-modal';
import { DiscNumberModalPage } from '../disc-number-modal/disc-number-modal';
import { GridModalPage } from '../grid-modal/grid-modal';
import { IswcModalPage } from '../iswc-modal/iswc-modal';
import { BundleIdModalPage } from '../bundle-id-modal/bundle-id-modal';
import { PhysicalProductNameModalPage } from '../physical-product-name-modal/physical-product-name-modal';
import { AlbumIdModalPage } from '../album-id-modal/album-id-modal';

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
    private loadingCtrl: LoadingController,
    private modalCtrl: ModalController
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

  dismiss() {
   this.viewCtrl.dismiss();
  }

  // This will provide an explanation as to what a Publisher is in the usic business.
  openPublisherModal() {
    const publisherModal = this.modalCtrl.create(PublisherModalPage);
    publisherModal.present();
  }

  // This will explain what a Bundle Name is.
  openBundleNameModal() {
    const bundleNameModal = this.modalCtrl.create(BundleNameModalPage);
    bundleNameModal.present();
  }

  // This will explain what an ISRC code is and how to obtain one.
  openISRCCodeModal() {
    const isrcCodeModal = this.modalCtrl.create(IsrcCodeModalPage);
    isrcCodeModal.present();
  }

  // This will explaing what a Label Name is.
  openLabelNameModal() {
    const labelNameModal = this.modalCtrl.create(LabelNameModalPage);
    labelNameModal.present();
  }

  // This will explain what a Product Catalogue Number is
  openProductCatalogueNumberModal() {
    const productCatalogueNumberModal = this.modalCtrl.create(ProductCatalogueNumberModalPage);
    productCatalogueNumberModal.present();
  }

  // This will explain what a Disc Number is
  openDiscNumberModal() {
    const discNumberNumberModal = this.modalCtrl.create(DiscNumberModalPage);
    discNumberNumberModal.present();
  }

  // This will explain what a GRID is
  openGRIDModal() {
    const gridModal = this.modalCtrl.create(GridModalPage);
    gridModal.present();
  }

  // This will explain what an ISWC is
  openISWCModal() {
    const iswcModal = this.modalCtrl.create(IswcModalPage);
    iswcModal.present();
  }

  // This will explain what a Bundle Id
  openBundleIdModal() {
    const bundleIdModal = this.modalCtrl.create(BundleIdModalPage);
    bundleIdModal.present();
  }

  // This will explain what a Physical Product Name is.
  openPhysicalProductNameModal() {
    const physicalProductNameModal = this.modalCtrl.create(PhysicalProductNameModalPage);
    physicalProductNameModal.present();
  }

  openAlbumIdModal() {
    const albumIdModal = this.modalCtrl.create(AlbumIdModalPage);
    albumIdModal.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditSongPage');
  }

}
