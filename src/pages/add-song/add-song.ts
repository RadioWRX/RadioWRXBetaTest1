import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
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
  selector: 'page-add-song',
  templateUrl: 'add-song.html',
})
export class AddSongPage {

  validations_form: FormGroup;
  loading: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private formBuilder: FormBuilder,
    private firebaseService: FirebaseService,
    private modalCtrl: ModalController
  ) {
  }

  ionViewWillLoad(){
    this.resetFields()
  }

  resetFields(){
    //this.image = "./assets/imgs/album.jpeg";
    this.validations_form = this.formBuilder.group({
      title: new FormControl('', Validators.required),
      songnumber: new FormControl('', Validators.required),
      songwriters: new FormControl('', Validators.required),
      songdurationminutes: new FormControl('', Validators.required),
      songdurationseconds: new FormControl('', Validators.required),
      publisher: new FormControl('', Validators.required),
      bundlename: new FormControl('', Validators.required),
      isrccode: new FormControl('', Validators.required),
      labelname: new FormControl('', Validators.required),
      productcataloguenumber: new FormControl('', Validators.required),
      discnumber: new FormControl('', Validators.required),
      grid: new FormControl('', Validators.required),
      iswc: new FormControl('', Validators.required),
      bundleid: new FormControl('', Validators.required),
      physicalproductname: new FormControl('', Validators.required),
      albumid: new FormControl('', Validators.required)
    });
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
      /*image: this.image,
      released: value.released,
      totalsongs: value.totalsongs,
      duration: value.duration,
      upcean: value.upcean,
      genre: value.genre*/
    }
    this.firebaseService.createSong(data)
    .then(
      res => {
        this.resetFields();
        this.viewCtrl.dismiss();
      }
    )
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
    console.log('ionViewDidLoad AddSongPage');
  }

}
