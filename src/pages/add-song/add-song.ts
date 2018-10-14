import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { FirebaseService } from '../services/firebase.service';

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
    private firebaseService: FirebaseService
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

  dismiss() {
   this.viewCtrl.dismiss();
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



  ionViewDidLoad() {
    console.log('ionViewDidLoad AddSongPage');
  }

}
