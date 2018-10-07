webpackJsonp([22],{

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_storage__ = __webpack_require__(266);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FirebaseService = /** @class */ (function () {
    function FirebaseService(afs) {
        this.afs = afs;
    }
    //Allow user to retrieve tasks.
    FirebaseService.prototype.getTasks = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var currentUser = __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"]().currentUser;
            _this.snapshotChangesSubscription = _this.afs.collection('people').doc(currentUser.uid).collection('tasks').snapshotChanges()
                .subscribe(function (snapshots) {
                resolve(snapshots);
            });
        });
    };
    //Unsubsribe user after logout.
    FirebaseService.prototype.unsubscribeOnLogOut = function () {
        //remember to unsubscribe from the snapshotChanges
        // debugger;
        this.snapshotChangesSubscription.unsubscribe();
    };
    //This section of code deals with the CRUD of tasks.
    //Allow user to update a task.
    FirebaseService.prototype.updateTask = function (taskKey, value) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var currentUser = __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"]().currentUser;
            _this.afs.collection('people').doc(currentUser.uid).collection('tasks').doc(taskKey).set(value)
                .then(function (res) { return resolve(res); }, function (err) { return reject(err); });
        });
    };
    //Allow user to delete a task.
    FirebaseService.prototype.deleteTask = function (taskKey) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var currentUser = __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"]().currentUser;
            _this.afs.collection('people').doc(currentUser.uid).collection('tasks').doc(taskKey).delete()
                .then(function (res) { return resolve(res); }, function (err) { return reject(err); });
        });
    };
    //Allow user to creat a task.
    FirebaseService.prototype.createTask = function (value) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var currentUser = __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"]().currentUser;
            _this.afs.collection('people').doc(currentUser.uid).collection('tasks').add({
                title: value.title,
                description: value.description,
                image: value.image
            })
                .then(function (res) { return resolve(res); }, function (err) { return reject(err); });
        });
    };
    //This section of code deals with the CRUD of Members.
    //Allow user to delete a task.
    FirebaseService.prototype.deleteMember = function (memberKey) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var currentUser = __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"]().currentUser;
            _this.docId = localStorage.getItem('id');
            _this.afs.collection('band').doc(currentUser.uid).collection('members').doc(_this.docId).delete()
                .then(function (res) { return resolve(res); }, function (err) { return reject(err); });
        });
    };
    //Allow user to get Band Members.
    FirebaseService.prototype.getMembers = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var currentUser = __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"]().currentUser;
            _this.snapshotChangesSubscription = _this.afs.collection('band').doc(currentUser.uid).collection('members').snapshotChanges()
                .subscribe(function (snapshots) {
                resolve(snapshots);
            });
        });
    };
    //Alllow user to update Band Members.
    FirebaseService.prototype.updateMember = function (memberKey, value) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.docId = localStorage.getItem('id');
            var currentUser = __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"]().currentUser;
            _this.afs.collection('band').doc(currentUser.uid).collection('members').doc(_this.docId).set(value)
                .then(function (res) { return resolve(res); }, function (err) { return reject(err); });
        });
    };
    //Allow user to create a Band Member.
    FirebaseService.prototype.createMember = function (value) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var currentUser = __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"]().currentUser;
            _this.afs.collection('band').doc(currentUser.uid).collection('members').add({
                name: value.name,
                biography: value.biography,
                image: value.image,
                instrument: value.instrument,
                dob: value.dob
            })
                .then(function (res) { return resolve(res); }, function (err) { return reject(err); });
        });
    };
    //This section of code deals with the CRUD of Events.
    //Allow user to get Band Events.
    FirebaseService.prototype.getEvents = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var currentUser = __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"]().currentUser;
            _this.snapshotChangesSubscription = _this.afs.collection('band').doc(currentUser.uid).collection('events').snapshotChanges()
                .subscribe(function (snapshots) {
                resolve(snapshots);
            });
        });
    };
    //Allow user to create a Band Event.
    FirebaseService.prototype.createEvent = function (value) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var currentUser = __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"]().currentUser;
            _this.afs.collection('band').doc(currentUser.uid).collection('events').add({
                title: value.title,
                description: value.description,
                image: value.image
            })
                .then(function (res) { return resolve(res); }, function (err) { return reject(err); });
        });
    };
    //Allow user to delete an event.
    FirebaseService.prototype.deleteEvent = function (eventKey) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.docId = localStorage.getItem('id');
            var currentUser = __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"]().currentUser;
            _this.afs.collection('band').doc(currentUser.uid).collection('events').doc(_this.docId).delete()
                .then(function (res) { return resolve(res); }, function (err) { return reject(err); });
        });
    };
    //Alllow user to update Events.
    FirebaseService.prototype.updateEvent = function (eventKey, value) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.docId = localStorage.getItem('id');
            var currentUser = __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"]().currentUser;
            _this.afs.collection('band').doc(currentUser.uid).collection('events').doc(_this.docId).set(value)
                .then(function (res) { return resolve(res); }, function (err) { return reject(err); });
        });
    };
    //Allow user to get Albums
    FirebaseService.prototype.getAlbums = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var currentUser = __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"]().currentUser;
            _this.snapshotChangesSubscription = _this.afs.collection('band').doc(currentUser.uid).collection('albums').snapshotChanges()
                .subscribe(function (snapshots) {
                resolve(snapshots);
            });
        });
    };
    //Allow user to create an Album.
    FirebaseService.prototype.createAlbum = function (value) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var currentUser = __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"]().currentUser;
            _this.afs.collection('band').doc(currentUser.uid).collection('albums').add({
                title: value.title,
                description: value.description,
                image: value.image
            })
                .then(function (res) { return resolve(res); }, function (err) { return reject(err); });
        });
    };
    //Allow user to delete an album.
    FirebaseService.prototype.deleteAlbum = function (docId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.docId = localStorage.getItem('id');
            var currentUser = __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"]().currentUser;
            _this.afs.collection('band').doc(currentUser.uid).collection('albums').doc(_this.docId).delete()
                .then(function (res) { return resolve(res); }, function (err) { return reject(err); });
        });
    };
    //Alllow user to update Album.
    FirebaseService.prototype.updateAlbum = function (albumKey, value) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.docId = localStorage.getItem('id');
            var currentUser = __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"]().currentUser;
            _this.afs.collection('band').doc(currentUser.uid).collection('albums').doc(_this.docId).set(value)
                .then(function (res) { return resolve(res); }, function (err) { return reject(err); });
        });
    };
    //Allow user to get songs
    FirebaseService.prototype.getSongs = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.docId = localStorage.getItem('id');
            var currentUser = __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"]().currentUser;
            _this.snapshotChangesSubscription = _this.afs.collection('band').doc(currentUser.uid).collection('albums').doc(_this.docId).collection('songs').snapshotChanges()
                .subscribe(function (snapshots) {
                resolve(snapshots);
            });
        });
    };
    //Allow user to creat append a song to an album.
    FirebaseService.prototype.createSong = function (value) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var currentUser = __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"]().currentUser;
            _this.docId = localStorage.getItem('id');
            _this.afs.collection('band').doc(currentUser.uid).collection('albums').doc(_this.docId).collection('songs').add({
                title: value.title,
                description: value.description,
            })
                .then(function (res) { return resolve(res); }, function (err) { return reject(err); });
        });
    };
    //Allow user to delete an album.
    FirebaseService.prototype.deleteSong = function (songKey) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var currentUser = __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"]().currentUser;
            _this.docId = localStorage.getItem('id');
            _this.afs.collection('band').doc(currentUser.uid).collection('albums').doc(_this.docId).collection('songs').doc(songKey).delete()
                .then(function (res) { return resolve(res); }, function (err) { return reject(err); });
        });
    };
    //Alllow user to update Songs.
    FirebaseService.prototype.updateSong = function (songKey, value) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var currentUser = __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"]().currentUser;
            _this.docId = localStorage.getItem('id');
            _this.afs.collection('band').doc(currentUser.uid).collection('albums').doc(_this.docId).collection('songs').doc(songKey).set(value)
                .then(function (res) { return resolve(res); }, function (err) { return reject(err); });
        });
    };
    //Allow user to get Band Events.
    FirebaseService.prototype.getBandsByFans = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var currentUser = __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"]().currentUser;
            _this.snapshotChangesSubscription = _this.afs.collection('band').doc(currentUser.uid).collection('bandsbyfans').snapshotChanges()
                .subscribe(function (snapshots) {
                resolve(snapshots);
            });
        });
    };
    //Allow user to create Bands By Fans instance.
    FirebaseService.prototype.createBandsByFans = function (value) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var currentUser = __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"]().currentUser;
            //this.docId = localStorage.getItem('id');
            _this.afs.collection('band').doc(currentUser.uid).collection('bandsbyfans').add({
                title: value.title,
                description: value.description,
                image: value.image
                //id: value.id
            })
                .then(function (res) { return resolve(res); }, function (err) { return reject(err); });
        });
    };
    //Allow user to delete an album.
    FirebaseService.prototype.deleteBandsByFans = function (docId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.docId = localStorage.getItem('id');
            var currentUser = __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"]().currentUser;
            _this.afs.collection('band').doc(currentUser.uid).collection('bandsbyfans').doc(_this.docId).delete()
                .then(function (res) { return resolve(res); }, function (err) { return reject(err); });
        });
    };
    //Alllow user to update Album.
    FirebaseService.prototype.updateBandsByFans = function (albumKey, value) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.docId = localStorage.getItem('id');
            var currentUser = __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"]().currentUser;
            _this.afs.collection('band').doc(currentUser.uid).collection('bandsbyfans').doc(_this.docId).set(value)
                .then(function (res) { return resolve(res); }, function (err) { return reject(err); });
        });
    };
    //This section of code deals with the ImagePicker upload. FIX!!!
    //Allow user to pick an image. FIX!!! ImagePicker not currentl working properly
    //but default images are storing in Firebase Database.
    FirebaseService.prototype.encodeImageUri = function (imageUri, callback) {
        var c = document.createElement('canvas');
        var ctx = c.getContext("2d");
        var img = new Image();
        img.onload = function () {
            var aux = this;
            c.width = aux.width;
            c.height = aux.height;
            ctx.drawImage(img, 0, 0);
            var dataURL = c.toDataURL("image/jpeg");
            callback(dataURL);
        };
        img.src = imageUri;
    };
    ;
    FirebaseService.prototype.uploadImage = function (imageURI, randomId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var storageRef = __WEBPACK_IMPORTED_MODULE_3_firebase_app__["storage"]().ref();
            var imageRef = storageRef.child('image').child(randomId);
            _this.encodeImageUri(imageURI, function (image64) {
                imageRef.putString(image64, 'data_url')
                    .then(function (snapshot) {
                    snapshot.ref.getDownloadURL()
                        .then(function (res) { return resolve(res); });
                }, function (err) {
                    reject(err);
                });
            });
        });
    };
    FirebaseService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["AngularFirestore"]])
    ], FirebaseService);
    return FirebaseService;
}());

//# sourceMappingURL=firebase.service.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__menu_menu__ = __webpack_require__(273);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__menu_menu__["a" /* MenuPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/robertmartin/RadioWRXBetaTest1/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Contact" tabIcon="contacts"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Profile" tabIcon="person"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/robertmartin/RadioWRXBetaTest1/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BandEventDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_firebase_service__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BandEventDetailsPage = /** @class */ (function () {
    function BandEventDetailsPage(navCtrl, navParams, firebaseService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.firebaseService = firebaseService;
    }
    BandEventDetailsPage.prototype.ionViewWillLoad = function () {
        this.getData();
    };
    BandEventDetailsPage.prototype.getData = function () {
        this.item = this.navParams.get('data');
        this.image = this.item.image;
        /*this.validations_form = this.formBuilder.group({
          title: new FormControl(this.item.title, Validators.required),
          description: new FormControl(this.item.description, Validators.required)
        });*/
        console.log(this.item.image);
    };
    BandEventDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BandEventDetailsPage');
    };
    BandEventDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-band-event-details',template:/*ion-inline-start:"/Users/robertmartin/RadioWRXBetaTest1/src/pages/band-event-details/band-event-details.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <div class="list-mini">\n    <ion-list>\n      <ion-item>\n        <ion-grid>\n          <ion-row>\n            <ion-col col-3>\n              <ion-avatar item-start>\n                <img [src]="this.item.image">\n              </ion-avatar>\n            </ion-col>\n            <ion-col col-9>\n              <h2 class="song-text">{{this.item.title}}</h2>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n    </ion-list>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/robertmartin/RadioWRXBetaTest1/src/pages/band-event-details/band-event-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_firebase_service__["a" /* FirebaseService */]])
    ], BandEventDetailsPage);
    return BandEventDetailsPage;
}());

//# sourceMappingURL=band-event-details.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BandMemberDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_firebase_service__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BandMemberDetailsPage = /** @class */ (function () {
    function BandMemberDetailsPage(navCtrl, navParams, firebaseService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.firebaseService = firebaseService;
    }
    BandMemberDetailsPage.prototype.ionViewWillLoad = function () {
        this.getData();
    };
    BandMemberDetailsPage.prototype.getData = function () {
        this.item = this.navParams.get('data');
        this.image = this.item.image;
        /*this.validations_form = this.formBuilder.group({
          title: new FormControl(this.item.title, Validators.required),
          description: new FormControl(this.item.description, Validators.required)
        });*/
        console.log(this.item.image);
    };
    BandMemberDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BandMemberDetailsPage');
    };
    BandMemberDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-band-member-details',template:/*ion-inline-start:"/Users/robertmartin/RadioWRXBetaTest1/src/pages/band-member-details/band-member-details.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{this.item.name}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-card>\n    <ion-row>\n      <ion-col col-1>\n      </ion-col>\n      <ion-col col-10 text-center>\n        <h1>{{this.item.name}}</h1>\n        <h5>{{this.item.dob}}</h5>\n      </ion-col>\n      <ion-col col-1>\n      </ion-col>\n    </ion-row>\n    <ion-item>\n      <ion-row>\n        <ion-col>\n        </ion-col>\n        <ion-col>\n          <img [src]="this.item.image">\n        </ion-col>\n        <ion-col>\n        </ion-col>\n      </ion-row>\n    </ion-item>\n    <ion-card-content>\n      <h1 text-center>Biography</h1>\n      <p class="biography-text">{{this.item.biography}}</p>\n    </ion-card-content>\n    <ion-card-content>\n      <h1 text-center>Instruments</h1>\n      <h2 text-center>{{this.item.instrument}}</h2>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/robertmartin/RadioWRXBetaTest1/src/pages/band-member-details/band-member-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_firebase_service__["a" /* FirebaseService */]])
    ], BandMemberDetailsPage);
    return BandMemberDetailsPage;
}());

//# sourceMappingURL=band-member-details.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewBandEventsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_firebase_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__band_event_details_band_event_details__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__create_band_event_create_band_event__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__edit_band_event_edit_band_event__ = __webpack_require__(167);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ViewBandEventsPage = /** @class */ (function () {
    function ViewBandEventsPage(navCtrl, navParams, authService, firebaseService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.firebaseService = firebaseService;
    }
    ViewBandEventsPage.prototype.ionViewWillEnter = function () {
        this.getData();
    };
    ViewBandEventsPage.prototype.goToCreateBandEventPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__create_band_event_create_band_event__["a" /* CreateBandEventPage */]);
    };
    ViewBandEventsPage.prototype.getData = function () {
        var _this = this;
        this.firebaseService.getEvents()
            .then(function (events) {
            _this.items = events;
        });
    };
    ViewBandEventsPage.prototype.viewBandEventDetails = function (id, item) {
        //refId = 'shit';
        // debugger
        var data = {
            title: item.title,
            description: item.description,
            image: item.image,
        };
        localStorage.setItem("id", id);
        //alert(id);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__band_event_details_band_event_details__["a" /* BandEventDetailsPage */], {
            data: data
        });
        console.log(data);
    };
    ViewBandEventsPage.prototype.editBandEventDetails = function (id, item) {
        //refId = 'shit';
        // debugger
        var data = {
            title: item.title,
            description: item.description,
            image: item.image,
        };
        localStorage.setItem("id", id);
        //alert(id);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__edit_band_event_edit_band_event__["a" /* EditBandEventPage */], {
            data: data
        });
        console.log(data);
    };
    ViewBandEventsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ViewBandEventsPage');
    };
    ViewBandEventsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-view-band-events',template:/*ion-inline-start:"/Users/robertmartin/RadioWRXBetaTest1/src/pages/view-band-events/view-band-events.html"*/'<ion-header>\n\n  <ion-navbar color="dark">\n    <ion-title>Events</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="goToCreateBandEventPage()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="list-mini-content">\n  <div class="list-mini">\n    <ion-list small>\n      <ion-item *ngFor="let item of items">\n        <ion-grid>\n          <ion-row>\n            <ion-col col-2>\n              <ion-avatar item-start>\n                <img [src]="item.payload.doc.data().image">\n              </ion-avatar>\n            </ion-col>\n            <ion-col col-6>\n              <h3>{{item.payload.doc.data().title}}</h3>\n              <h5>{{item.payload.doc.data().description}}</h5>\n            </ion-col>\n            <ion-col col-2>\n              <button ion-button clear color="danger" (click)="editBandEventDetails(item.payload.doc.id,item.payload.doc.data())">Edit</button>\n            </ion-col>\n            <ion-col col-2>\n              <button ion-button clear color="Primary" (click)="viewBandEventDetails(item.payload.doc.id,item.payload.doc.data())">View</button>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n    </ion-list>\n  </div>\n  <h5 text-center>Click&nbsp;&nbsp;<ion-icon name="add"></ion-icon>&nbsp;&nbsp;to create Band Event</h5>\n</ion-content>\n'/*ion-inline-end:"/Users/robertmartin/RadioWRXBetaTest1/src/pages/view-band-events/view-band-events.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__services_firebase_service__["a" /* FirebaseService */]])
    ], ViewBandEventsPage);
    return ViewBandEventsPage;
}());

//# sourceMappingURL=view-band-events.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateBandEventPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_firebase_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_image_picker__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CreateBandEventPage = /** @class */ (function () {
    function CreateBandEventPage(viewCtrl, toastCtrl, formBuilder, firebaseService, loadingCtrl, imagePicker) {
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.formBuilder = formBuilder;
        this.firebaseService = firebaseService;
        this.loadingCtrl = loadingCtrl;
        this.imagePicker = imagePicker;
    }
    CreateBandEventPage.prototype.ionViewWillLoad = function () {
        this.resetFields();
    };
    CreateBandEventPage.prototype.resetFields = function () {
        this.image = "./assets/imgs/calendar.png";
        this.validations_form = this.formBuilder.group({
            title: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            description: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required)
        });
    };
    CreateBandEventPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    CreateBandEventPage.prototype.onSubmit = function (value) {
        var _this = this;
        var data = {
            title: value.title,
            description: value.description,
            image: this.image
        };
        this.firebaseService.createEvent(data)
            .then(function (res) {
            _this.resetFields();
            _this.viewCtrl.dismiss();
        });
    };
    CreateBandEventPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreateBandEventPage');
    };
    CreateBandEventPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-create-band-event',template:/*ion-inline-start:"/Users/robertmartin/RadioWRXBetaTest1/src/pages/create-band-event/create-band-event.html"*/'\n<ion-header>\n\n  <ion-navbar color="dark">\n    <ion-title>Add Event</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div>\n    <ion-row no-padding>\n      <ion-col no-padding col-6 offset-3>\n        <img [src]="image" alt="this is the image"/>\n      </ion-col>\n    </ion-row>\n    <ion-row no-padding class="user-image-row">\n      <ion-col no-padding width-60>\n        <button class="image-action-button" ion-button outline block small (click)="openImagePicker()">Change Picture</button>\n      </ion-col>\n    </ion-row>\n  </div>\n  <form class="new-user-form" [formGroup]="validations_form" (ngSubmit)="onSubmit(validations_form.value)">\n    <ion-item>\n      <ion-label floating color="primary">Title</ion-label>\n      <ion-input type="text" formControlName="title" class="form-control" required></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating color="primary">Description</ion-label>\n      <ion-input type="text" formControlName="description" class="form-control" required></ion-input>\n    </ion-item>\n    <button class="form-action-button" ion-button block type="submit" [disabled]="!validations_form.valid">Create</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/robertmartin/RadioWRXBetaTest1/src/pages/create-band-event/create-band-event.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__services_firebase_service__["a" /* FirebaseService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_image_picker__["a" /* ImagePicker */]])
    ], CreateBandEventPage);
    return CreateBandEventPage;
}());

//# sourceMappingURL=create-band-event.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditBandEventPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_firebase_service__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditBandEventPage = /** @class */ (function () {
    function EditBandEventPage(navParams, viewCtrl, toastCtrl, alertCtrl, formBuilder, firebaseService, loadingCtrl) {
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.formBuilder = formBuilder;
        this.firebaseService = firebaseService;
        this.loadingCtrl = loadingCtrl;
    }
    EditBandEventPage.prototype.ionViewWillLoad = function () {
        this.getData();
    };
    EditBandEventPage.prototype.getData = function () {
        this.item = this.navParams.get('data');
        this.image = this.item.image;
        this.validations_form = this.formBuilder.group({
            title: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](this.item.title, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            description: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](this.item.description, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required)
        });
        console.log(this.item);
    };
    EditBandEventPage.prototype.delete = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Confirm',
            message: 'Do you want to delete ' + this.item.title + '?',
            buttons: [
                {
                    text: 'No',
                    handler: function () { }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        _this.firebaseService.deleteEvent(_this.item.id)
                            .then(function (res) { return _this.viewCtrl.dismiss(); }, function (err) { return console.log(err); });
                    }
                }
            ]
        });
        confirm.present();
    };
    EditBandEventPage.prototype.onSubmit = function (value) {
        var _this = this;
        var data = {
            title: value.title,
            description: value.description,
            image: this.image
        };
        this.firebaseService.updateEvent(this.item.id, data)
            .then(function (res) {
            _this.viewCtrl.dismiss();
        });
    };
    EditBandEventPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditBandEventPage');
    };
    EditBandEventPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-band-event',template:/*ion-inline-start:"/Users/robertmartin/RadioWRXBetaTest1/src/pages/edit-band-event/edit-band-event.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Edit {{ this.item.title }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class="user-image-content">\n    <ion-row no-padding class="user-image-row">\n      <ion-col no-padding col-6 offset-3>\n        <img [src]="image" alt="this is the image"/>\n      </ion-col>\n    </ion-row>\n    <ion-row no-padding class="user-image-row">\n      <ion-col no-padding width-60>\n        <button class="image-action-button" ion-button outline block small (click)="openImagePicker()">Change Picture</button>\n      </ion-col>\n    </ion-row>\n  </div>\n  <form class="new-user-form" [formGroup]="validations_form" (ngSubmit)="onSubmit(validations_form.value)">\n    <ion-item>\n      <ion-label floating color="primary">Title</ion-label>\n      <ion-input type="text" formControlName="title" class="form-control" required></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating color="primary">Description</ion-label>\n      <ion-input type="text" formControlName="description" class="form-control" required></ion-input>\n    </ion-item>\n    <button class="form-action-button" ion-button block type="submit" [disabled]="!validations_form.valid">Save</button>\n  </form>\n  <button class="form-action-button" ion-button block color="danger" (click)="delete()">Delete</button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/robertmartin/RadioWRXBetaTest1/src/pages/edit-band-event/edit-band-event.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__services_firebase_service__["a" /* FirebaseService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], EditBandEventPage);
    return EditBandEventPage;
}());

//# sourceMappingURL=edit-band-event.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateAlbumPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_firebase_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__new_album_modal_new_album_modal__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__band_view_album_band_view_album__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__edit_album_edit_album__ = __webpack_require__(173);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CreateAlbumPage = /** @class */ (function () {
    function CreateAlbumPage(navCtrl, navParams, modalCtrl, authService, firebaseService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.authService = authService;
        this.firebaseService = firebaseService;
    }
    CreateAlbumPage.prototype.ionViewWillEnter = function () {
        this.getData();
    };
    CreateAlbumPage.prototype.getData = function () {
        var _this = this;
        this.firebaseService.getAlbums()
            .then(function (albums) {
            _this.items = albums;
        });
    };
    CreateAlbumPage.prototype.viewAlbumDetails = function (id, item) {
        //refId = 'shit';
        // debugger
        var data = {
            title: item.title,
            description: item.description,
            image: item.image
            //id: id
        };
        localStorage.setItem("id", id);
        //alert(id);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__band_view_album_band_view_album__["a" /* BandViewAlbumPage */], {
            data: data
        });
        console.log(data);
    };
    CreateAlbumPage.prototype.editAlbumDetails = function (id, item) {
        //refId = 'shit';
        // debugger
        var data = {
            title: item.title,
            description: item.description,
            image: item.image,
        };
        localStorage.setItem("id", id);
        alert(id);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__edit_album_edit_album__["a" /* EditAlbumPage */], {
            data: data
        });
        console.log(data);
    };
    CreateAlbumPage.prototype.openNewAlbumModal = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__new_album_modal_new_album_modal__["a" /* NewAlbumModalPage */]);
        modal.onDidDismiss(function (data) {
            _this.getData();
        });
        modal.present();
    };
    CreateAlbumPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreateAlbumPage');
    };
    CreateAlbumPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-create-album',template:/*ion-inline-start:"/Users/robertmartin/RadioWRXBetaTest1/src/pages/create-album/create-album.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Create Album</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="openNewAlbumModal()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="list-mini-content">\n  <div class="list-mini">\n    <ion-list small>\n      <ion-item *ngFor="let item of items">\n        <ion-grid>\n          <ion-row>\n            <ion-col col-2>\n              <ion-avatar item-start>\n                <img [src]="item.payload.doc.data().image">\n              </ion-avatar>\n            </ion-col>\n            <ion-col col-6>\n              <h3>{{item.payload.doc.data().title}}</h3>\n              <h5>{{item.payload.doc.data().description}}</h5>\n            </ion-col>\n            <ion-col col-2>\n              <button ion-button clear color="danger" (click)="editAlbumDetails(item.payload.doc.id,item.payload.doc.data())">Edit</button>\n            </ion-col>\n            <ion-col col-2>\n              <button ion-button clear color="Primary" (click)="viewAlbumDetails(item.payload.doc.id,item.payload.doc.data())">View</button>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n    </ion-list>\n  </div>\n  <h5 text-center>Click&nbsp;&nbsp;<ion-icon name="add"></ion-icon>&nbsp;&nbsp;to create Album</h5>\n</ion-content>\n'/*ion-inline-end:"/Users/robertmartin/RadioWRXBetaTest1/src/pages/create-album/create-album.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__services_firebase_service__["a" /* FirebaseService */]])
    ], CreateAlbumPage);
    return CreateAlbumPage;
}());

//# sourceMappingURL=create-album.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewAlbumModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_firebase_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_image_picker__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewAlbumModalPage = /** @class */ (function () {
    function NewAlbumModalPage(viewCtrl, toastCtrl, formBuilder, firebaseService, loadingCtrl, imagePicker) {
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.formBuilder = formBuilder;
        this.firebaseService = firebaseService;
        this.loadingCtrl = loadingCtrl;
        this.imagePicker = imagePicker;
        this.loading = this.loadingCtrl.create();
    }
    NewAlbumModalPage.prototype.ionViewWillLoad = function () {
        this.resetFields();
    };
    NewAlbumModalPage.prototype.resetFields = function () {
        this.image = "./assets/imgs/album.jpeg";
        this.validations_form = this.formBuilder.group({
            title: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            description: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required)
        });
    };
    NewAlbumModalPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    NewAlbumModalPage.prototype.onSubmit = function (value) {
        var _this = this;
        var data = {
            title: value.title,
            description: value.description,
            image: this.image
        };
        this.firebaseService.createAlbum(data)
            .then(function (res) {
            _this.resetFields();
            _this.viewCtrl.dismiss();
        });
    };
    NewAlbumModalPage.prototype.openImagePicker = function () {
        var _this = this;
        this.imagePicker.hasReadPermission()
            .then(function (result) {
            if (result == false) {
                // no callbacks required as this opens a popup which returns async
                _this.imagePicker.requestReadPermission();
            }
            else if (result == true) {
                _this.imagePicker.getPictures({
                    maximumImagesCount: 1
                }).then(function (results) {
                    for (var i = 0; i < results.length; i++) {
                        _this.uploadImageToFirebase(results[i]);
                    }
                }, function (err) { return console.log(err); });
            }
        }, function (err) {
            console.log(err);
        });
    };
    NewAlbumModalPage.prototype.uploadImageToFirebase = function (image) {
        var _this = this;
        this.loading.present();
        image = Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* normalizeURL */])(image);
        var randomId = Math.random().toString(36).substr(2, 5);
        //uploads img to firebase storage
        this.firebaseService.uploadImage(image, randomId)
            .then(function (photoURL) {
            _this.image = photoURL;
            _this.loading.dismiss();
            var toast = _this.toastCtrl.create({
                message: 'Image was updated successfully',
                duration: 3000
            });
            toast.present();
        });
    };
    NewAlbumModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewAlbumModalPage');
    };
    NewAlbumModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-new-album-modal',template:/*ion-inline-start:"/Users/robertmartin/RadioWRXBetaTest1/src/pages/new-album-modal/new-album-modal.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <ion-buttons start>\n      <button ion-button icon-only (click)="dismiss()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>\n      New Album\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div>\n    <ion-row no-padding>\n      <ion-col no-padding col-6 offset-3>\n        <img [src]="image" alt="this is the image"/>\n      </ion-col>\n    </ion-row>\n    <ion-row no-padding class="user-image-row">\n      <ion-col no-padding width-60>\n        <button class="image-action-button" ion-button outline block small (click)="openImagePicker()">Change Picture</button>\n      </ion-col>\n    </ion-row>\n  </div>\n  <form class="new-user-form" [formGroup]="validations_form" (ngSubmit)="onSubmit(validations_form.value)">\n    <ion-item>\n      <ion-label floating color="primary">Title</ion-label>\n      <ion-input type="text" formControlName="title" class="form-control" required></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating color="primary">Description</ion-label>\n      <ion-input type="text" formControlName="description" class="form-control" required></ion-input>\n    </ion-item>\n    <button class="form-action-button" ion-button block type="submit" [disabled]="!validations_form.valid">Create</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/robertmartin/RadioWRXBetaTest1/src/pages/new-album-modal/new-album-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__services_firebase_service__["a" /* FirebaseService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_image_picker__["a" /* ImagePicker */]])
    ], NewAlbumModalPage);
    return NewAlbumModalPage;
}());

//# sourceMappingURL=new-album-modal.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BandViewAlbumPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_firebase_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__new_song_modal_new_song_modal__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__edit_song_edit_song__ = __webpack_require__(172);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BandViewAlbumPage = /** @class */ (function () {
    function BandViewAlbumPage(navParams, navCtrl, viewCtrl, toastCtrl, alertCtrl, formBuilder, firebaseService, loadingCtrl, modalCtrl) {
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.formBuilder = formBuilder;
        this.firebaseService = firebaseService;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
    }
    BandViewAlbumPage.prototype.ionViewWillEnter = function () {
        this.getData();
    };
    BandViewAlbumPage.prototype.getData = function () {
        var _this = this;
        this.firebaseService.getSongs()
            .then(function (songs) {
            _this.items = songs;
        });
    };
    BandViewAlbumPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    BandViewAlbumPage.prototype.editSongDetails = function (id, item) {
        // debugger
        var data = {
            title: item.title,
            description: item.description,
            id: id
        };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__edit_song_edit_song__["a" /* EditSongPage */], {
            data: data
        });
    };
    BandViewAlbumPage.prototype.openNewSongModal = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__new_song_modal_new_song_modal__["a" /* NewSongModalPage */]);
        modal.onDidDismiss(function (data) {
            _this.getData();
        });
        modal.present();
    };
    BandViewAlbumPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BandViewAlbumPage');
    };
    BandViewAlbumPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-band-view-album',template:/*ion-inline-start:"/Users/robertmartin/RadioWRXBetaTest1/src/pages/band-view-album/band-view-album.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title></ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="openNewSongModal()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <div class="list-mini">\n    <ion-list>\n      <ion-item *ngFor="let item of items">\n        <ion-grid>\n          <ion-row>\n            <ion-col col-1>\n              <ion-avatar item-start>\n                <ion-icon name="play" large></ion-icon>\n              </ion-avatar>\n            </ion-col>\n            <ion-col col-9>\n              <h2 class="song-text">{{item.payload.doc.data().title}}</h2>\n            </ion-col>\n            <ion-col col-2>\n              <button ion-button clear color="danger" (click)="editSongDetails(item.payload.doc.id,item.payload.doc.data())">Edit</button>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n    </ion-list>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/robertmartin/RadioWRXBetaTest1/src/pages/band-view-album/band-view-album.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__services_firebase_service__["a" /* FirebaseService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], BandViewAlbumPage);
    return BandViewAlbumPage;
}());

//# sourceMappingURL=band-view-album.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewSongModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_firebase_service__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewSongModalPage = /** @class */ (function () {
    function NewSongModalPage(viewCtrl, toastCtrl, formBuilder, firebaseService, loadingCtrl) {
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.formBuilder = formBuilder;
        this.firebaseService = firebaseService;
        this.loadingCtrl = loadingCtrl;
        this.loading = this.loadingCtrl.create();
    }
    NewSongModalPage.prototype.ionViewWillLoad = function () {
        this.resetFields();
    };
    NewSongModalPage.prototype.resetFields = function () {
        this.image = "./assets/imgs/profile.png";
        this.validations_form = this.formBuilder.group({
            title: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            description: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required)
        });
    };
    NewSongModalPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    NewSongModalPage.prototype.getLocalStorageId = function () {
        //this.docId = localStorage.getItem('id');
        //alert(this.docId);
    };
    NewSongModalPage.prototype.onSubmit = function (value) {
        var _this = this;
        var data = {
            title: value.title,
            description: value.description,
            id: value.id
            //image: this.image
        };
        this.firebaseService.createSong(data)
            .then(function (res) {
            _this.resetFields();
            _this.viewCtrl.dismiss();
        });
    };
    NewSongModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewSongModalPage');
    };
    NewSongModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-new-song-modal',template:/*ion-inline-start:"/Users/robertmartin/RadioWRXBetaTest1/src/pages/new-song-modal/new-song-modal.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Add Song</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="dismiss()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div>\n    <ion-row no-padding>\n      <ion-col no-padding col-6 offset-3>\n        <img [src]="image" alt="this is the image"/>\n      </ion-col>\n    </ion-row>\n  </div>\n  <form class="new-user-form" [formGroup]="validations_form" (ngSubmit)="onSubmit(validations_form.value)">\n    <ion-item>\n      <ion-label floating color="primary">Title</ion-label>\n      <ion-input type="text" formControlName="title" class="form-control" required></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating color="primary">Description</ion-label>\n      <ion-input type="text" formControlName="description" class="form-control" required></ion-input>\n    </ion-item>\n    <button class="form-action-button" ion-button block type="submit" [disabled]="!validations_form.valid">Create</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/robertmartin/RadioWRXBetaTest1/src/pages/new-song-modal/new-song-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__services_firebase_service__["a" /* FirebaseService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], NewSongModalPage);
    return NewSongModalPage;
}());

//# sourceMappingURL=new-song-modal.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditSongPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_firebase_service__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditSongPage = /** @class */ (function () {
    function EditSongPage(navParams, viewCtrl, toastCtrl, alertCtrl, formBuilder, firebaseService, loadingCtrl) {
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.formBuilder = formBuilder;
        this.firebaseService = firebaseService;
        this.loadingCtrl = loadingCtrl;
    }
    EditSongPage.prototype.ionViewWillLoad = function () {
        this.getData();
    };
    EditSongPage.prototype.getData = function () {
        this.item = this.navParams.get('data');
        this.image = this.item.image;
        this.validations_form = this.formBuilder.group({
            title: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](this.item.title, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            description: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](this.item.description, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required)
        });
        console.log(this.item);
    };
    EditSongPage.prototype.onSubmit = function (value) {
        var _this = this;
        var data = {
            title: value.title,
            description: value.description
        };
        this.firebaseService.updateSong(this.item.id, data)
            .then(function (res) {
            _this.viewCtrl.dismiss();
        });
    };
    EditSongPage.prototype.delete = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Confirm',
            message: 'Do you want to delete ' + this.item.title + '?',
            buttons: [
                {
                    text: 'No',
                    handler: function () { }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        _this.firebaseService.deleteSong(_this.item.id)
                            .then(function (res) { return _this.viewCtrl.dismiss(); }, function (err) { return console.log(err); });
                    }
                }
            ]
        });
        confirm.present();
    };
    EditSongPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditSongPage');
    };
    EditSongPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-song',template:/*ion-inline-start:"/Users/robertmartin/RadioWRXBetaTest1/src/pages/edit-song/edit-song.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>EditSong</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form class="new-user-form" [formGroup]="validations_form" (ngSubmit)="onSubmit(validations_form.value)">\n    <ion-item>\n      <ion-label floating color="primary">Title</ion-label>\n      <ion-input type="text" formControlName="title" class="form-control" required></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating color="primary">Description</ion-label>\n      <ion-input type="text" formControlName="description" class="form-control" required></ion-input>\n    </ion-item>\n    <button class="form-action-button" ion-button block type="submit" [disabled]="!validations_form.valid">Save</button>\n  </form>\n  <button class="form-action-button" ion-button block color="danger" (click)="delete()">Delete</button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/robertmartin/RadioWRXBetaTest1/src/pages/edit-song/edit-song.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__services_firebase_service__["a" /* FirebaseService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], EditSongPage);
    return EditSongPage;
}());

//# sourceMappingURL=edit-song.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditAlbumPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_firebase_service__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditAlbumPage = /** @class */ (function () {
    function EditAlbumPage(navParams, viewCtrl, toastCtrl, alertCtrl, formBuilder, firebaseService, loadingCtrl) {
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.formBuilder = formBuilder;
        this.firebaseService = firebaseService;
        this.loadingCtrl = loadingCtrl;
        this.loading = this.loadingCtrl.create();
    }
    EditAlbumPage.prototype.ionViewWillLoad = function () {
        this.getData();
    };
    EditAlbumPage.prototype.getData = function () {
        this.item = this.navParams.get('data');
        this.image = this.item.image;
        this.validations_form = this.formBuilder.group({
            title: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](this.item.title, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            description: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](this.item.description, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required)
        });
        console.log(this.item.image);
    };
    EditAlbumPage.prototype.onSubmit = function (value) {
        var _this = this;
        var data = {
            title: value.title,
            description: value.description,
            image: this.image
        };
        this.firebaseService.updateAlbum(this.item.id, data)
            .then(function (res) {
            _this.viewCtrl.dismiss();
        });
    };
    EditAlbumPage.prototype.delete = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Confirm',
            message: 'Do you want to delete ' + this.item.title + '?',
            buttons: [
                {
                    text: 'No',
                    handler: function () { }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        _this.firebaseService.deleteAlbum(_this.item.id)
                            .then(function (res) { return _this.viewCtrl.dismiss(); }, function (err) { return console.log(err); });
                    }
                }
            ]
        });
        confirm.present();
    };
    EditAlbumPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditAlbumPage');
    };
    EditAlbumPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-album',template:/*ion-inline-start:"/Users/robertmartin/RadioWRXBetaTest1/src/pages/edit-album/edit-album.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Edit Album</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class="user-image-content">\n    <ion-row no-padding class="user-image-row">\n      <ion-col no-padding col-6 offset-3>\n        <img [src]="image" alt="this is the image"/>\n      </ion-col>\n    </ion-row>\n    <ion-row no-padding class="user-image-row">\n      <ion-col no-padding width-60>\n        <button class="image-action-button" ion-button outline block small (click)="openImagePicker()">Change Picture</button>\n      </ion-col>\n    </ion-row>\n  </div>\n  <form class="new-user-form" [formGroup]="validations_form" (ngSubmit)="onSubmit(validations_form.value)">\n    <ion-item>\n      <ion-label floating color="primary">Title</ion-label>\n      <ion-input type="text" formControlName="title" class="form-control" required></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating color="primary">Description</ion-label>\n      <ion-input type="text" formControlName="description" class="form-control" required></ion-input>\n    </ion-item>\n    <button class="form-action-button" ion-button block type="submit" [disabled]="!validations_form.valid">Save</button>\n  </form>\n  <button class="form-action-button" ion-button block color="danger" (click)="delete()">Delete</button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/robertmartin/RadioWRXBetaTest1/src/pages/edit-album/edit-album.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__services_firebase_service__["a" /* FirebaseService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], EditAlbumPage);
    return EditAlbumPage;
}());

//# sourceMappingURL=edit-album.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewBandsByFansPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_firebase_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__create_bands_by_fans_create_bands_by_fans__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__bands_by_fans_details_bands_by_fans_details__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__edit_bands_by_fans_edit_bands_by_fans__ = __webpack_require__(177);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ViewBandsByFansPage = /** @class */ (function () {
    function ViewBandsByFansPage(navCtrl, navParams, authService, firebaseService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.firebaseService = firebaseService;
    }
    ViewBandsByFansPage.prototype.goToCreateBandsByFansPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__create_bands_by_fans_create_bands_by_fans__["a" /* CreateBandsByFansPage */]);
    };
    ViewBandsByFansPage.prototype.ionViewWillEnter = function () {
        this.getData();
    };
    ViewBandsByFansPage.prototype.getData = function () {
        var _this = this;
        this.firebaseService.getBandsByFans()
            .then(function (bandsbyfans) {
            _this.items = bandsbyfans;
        });
    };
    ViewBandsByFansPage.prototype.viewBandsByFansDetails = function (id, item) {
        //refId = 'shit';
        // debugger
        var data = {
            title: item.title,
            description: item.description,
            image: item.image,
        };
        localStorage.setItem("id", id);
        //alert(id);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__bands_by_fans_details_bands_by_fans_details__["a" /* BandsByFansDetailsPage */], {
            data: data
        });
        console.log(data);
    };
    ViewBandsByFansPage.prototype.editBandsByFansDetails = function (id, item) {
        //refId = 'shit';
        // debugger
        var data = {
            title: item.title,
            description: item.description,
            image: item.image,
        };
        localStorage.setItem("id", id);
        //alert(id);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__edit_bands_by_fans_edit_bands_by_fans__["a" /* EditBandsByFansPage */], {
            data: data
        });
        console.log(data);
    };
    ViewBandsByFansPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ViewBandsByFansPage');
    };
    ViewBandsByFansPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-view-bands-by-fans',template:/*ion-inline-start:"/Users/robertmartin/RadioWRXBetaTest1/src/pages/view-bands-by-fans/view-bands-by-fans.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Bands By Fans</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="goToCreateBandsByFansPage()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="list-mini-content">\n  <div class="list-mini">\n    <ion-list small>\n      <ion-item *ngFor="let item of items">\n        <ion-grid>\n          <ion-row>\n            <ion-col col-2>\n              <ion-avatar item-start>\n                <img [src]="item.payload.doc.data().image">\n              </ion-avatar>\n            </ion-col>\n            <ion-col col-6>\n              <h3>{{item.payload.doc.data().title}}</h3>\n              <h5>{{item.payload.doc.data().description}}</h5>\n            </ion-col>\n            <ion-col col-2>\n              <button ion-button clear color="danger" (click)="editBandsByFansDetails(item.payload.doc.id,item.payload.doc.data())">Edit</button>\n            </ion-col>\n            <ion-col col-2>\n              <button ion-button clear color="Primary" (click)="viewBandsByFansDetails(item.payload.doc.id,item.payload.doc.data())">View</button>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n    </ion-list>\n  </div>\n  <h5 text-center>Click&nbsp;&nbsp;<ion-icon name="add"></ion-icon>&nbsp;&nbsp;to create Bands By Fans Event</h5>\n</ion-content>\n'/*ion-inline-end:"/Users/robertmartin/RadioWRXBetaTest1/src/pages/view-bands-by-fans/view-bands-by-fans.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__services_firebase_service__["a" /* FirebaseService */]])
    ], ViewBandsByFansPage);
    return ViewBandsByFansPage;
}());

//# sourceMappingURL=view-bands-by-fans.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateBandsByFansPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_firebase_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_image_picker__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CreateBandsByFansPage = /** @class */ (function () {
    function CreateBandsByFansPage(viewCtrl, toastCtrl, formBuilder, firebaseService, loadingCtrl, imagePicker) {
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.formBuilder = formBuilder;
        this.firebaseService = firebaseService;
        this.loadingCtrl = loadingCtrl;
        this.imagePicker = imagePicker;
    }
    CreateBandsByFansPage.prototype.ionViewWillLoad = function () {
        this.resetFields();
    };
    CreateBandsByFansPage.prototype.resetFields = function () {
        this.image = "./assets/imgs/profile.png";
        this.validations_form = this.formBuilder.group({
            title: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            description: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required)
        });
    };
    CreateBandsByFansPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    CreateBandsByFansPage.prototype.onSubmit = function (value) {
        var _this = this;
        var data = {
            title: value.title,
            description: value.description,
            image: this.image
        };
        this.firebaseService.createBandsByFans(data)
            .then(function (res) {
            _this.resetFields();
            _this.viewCtrl.dismiss();
        });
    };
    CreateBandsByFansPage.prototype.openImagePicker = function () {
        var _this = this;
        this.imagePicker.hasReadPermission()
            .then(function (result) {
            if (result == false) {
                // no callbacks required as this opens a popup which returns async
                _this.imagePicker.requestReadPermission();
            }
            else if (result == true) {
                _this.imagePicker.getPictures({
                    maximumImagesCount: 1
                }).then(function (results) {
                    for (var i = 0; i < results.length; i++) {
                        _this.uploadImageToFirebase(results[i]);
                    }
                }, function (err) { return console.log(err); });
            }
        }, function (err) {
            console.log(err);
        });
    };
    CreateBandsByFansPage.prototype.uploadImageToFirebase = function (image) {
        var _this = this;
        this.loading.present();
        image = Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* normalizeURL */])(image);
        var randomId = Math.random().toString(36).substr(2, 5);
        //uploads img to firebase storage
        this.firebaseService.uploadImage(image, randomId)
            .then(function (photoURL) {
            _this.image = photoURL;
            _this.loading.dismiss();
            var toast = _this.toastCtrl.create({
                message: 'Image was updated successfully',
                duration: 3000
            });
            toast.present();
        });
    };
    CreateBandsByFansPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreateBandsByFansPage');
    };
    CreateBandsByFansPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-create-bands-by-fans',template:/*ion-inline-start:"/Users/robertmartin/RadioWRXBetaTest1/src/pages/create-bands-by-fans/create-bands-by-fans.html"*/'<ion-header>\n\n  <ion-navbar color="dark">\n    <ion-buttons start>\n      <button ion-button icon-only (click)="dismiss()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>\n      Bands By Fans\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div>\n    <ion-row no-padding>\n      <ion-col no-padding col-6 offset-3>\n        <img [src]="image" alt="this is the image"/>\n      </ion-col>\n    </ion-row>\n    <ion-row no-padding class="user-image-row">\n      <ion-col no-padding width-60>\n        <button class="image-action-button" ion-button outline block small (click)="openImagePicker()">Change Picture</button>\n      </ion-col>\n    </ion-row>\n  </div>\n  <form class="new-user-form" [formGroup]="validations_form" (ngSubmit)="onSubmit(validations_form.value)">\n    <ion-item>\n      <ion-label floating color="primary">Title</ion-label>\n      <ion-input type="text" formControlName="title" class="form-control" required></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating color="primary">Description</ion-label>\n      <ion-input type="text" formControlName="description" class="form-control" required></ion-input>\n    </ion-item>\n    <button class="form-action-button" ion-button block type="submit" [disabled]="!validations_form.valid">Create</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/robertmartin/RadioWRXBetaTest1/src/pages/create-bands-by-fans/create-bands-by-fans.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__services_firebase_service__["a" /* FirebaseService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_image_picker__["a" /* ImagePicker */]])
    ], CreateBandsByFansPage);
    return CreateBandsByFansPage;
}());

//# sourceMappingURL=create-bands-by-fans.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BandsByFansDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_firebase_service__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BandsByFansDetailsPage = /** @class */ (function () {
    //items: Array<any>
    function BandsByFansDetailsPage(navCtrl, navParams, firebaseService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.firebaseService = firebaseService;
    }
    BandsByFansDetailsPage.prototype.ionViewWillLoad = function () {
        this.getData();
    };
    BandsByFansDetailsPage.prototype.getData = function () {
        this.item = this.navParams.get('data');
        this.image = this.item.image;
        /*this.validations_form = this.formBuilder.group({
          title: new FormControl(this.item.title, Validators.required),
          description: new FormControl(this.item.description, Validators.required)
        });*/
        console.log(this.item.image);
    };
    BandsByFansDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BandsByFansDetailsPage');
    };
    BandsByFansDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-bands-by-fans-details',template:/*ion-inline-start:"/Users/robertmartin/RadioWRXBetaTest1/src/pages/bands-by-fans-details/bands-by-fans-details.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{this.item.title}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <div class="list-mini">\n    <ion-list>\n      <ion-item>\n        <ion-grid>\n          <ion-row>\n            <ion-col col-3>\n              <ion-avatar item-start>\n                <img [src]="this.item.image">\n              </ion-avatar>\n            </ion-col>\n            <ion-col col-9>\n              <h2 class="song-text">{{this.item.title}}</h2>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n    </ion-list>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/robertmartin/RadioWRXBetaTest1/src/pages/bands-by-fans-details/bands-by-fans-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_firebase_service__["a" /* FirebaseService */]])
    ], BandsByFansDetailsPage);
    return BandsByFansDetailsPage;
}());

//# sourceMappingURL=bands-by-fans-details.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditBandsByFansPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_firebase_service__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditBandsByFansPage = /** @class */ (function () {
    function EditBandsByFansPage(navParams, viewCtrl, toastCtrl, alertCtrl, formBuilder, firebaseService, loadingCtrl) {
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.formBuilder = formBuilder;
        this.firebaseService = firebaseService;
        this.loadingCtrl = loadingCtrl;
    }
    EditBandsByFansPage.prototype.ionViewWillLoad = function () {
        this.getData();
    };
    EditBandsByFansPage.prototype.getData = function () {
        this.item = this.navParams.get('data');
        this.image = this.item.image;
        this.validations_form = this.formBuilder.group({
            title: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](this.item.title, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            description: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](this.item.description, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required)
        });
        console.log(this.item);
    };
    EditBandsByFansPage.prototype.delete = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Confirm',
            message: 'Do you want to delete ' + this.item.title + '?',
            buttons: [
                {
                    text: 'No',
                    handler: function () { }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        _this.firebaseService.deleteBandsByFans(_this.item.id)
                            .then(function (res) { return _this.viewCtrl.dismiss(); }, function (err) { return console.log(err); });
                    }
                }
            ]
        });
        confirm.present();
    };
    EditBandsByFansPage.prototype.onSubmit = function (value) {
        var _this = this;
        var data = {
            title: value.title,
            description: value.description,
            image: this.image
        };
        this.firebaseService.updateBandsByFans(this.item.id, data)
            .then(function (res) {
            _this.viewCtrl.dismiss();
        });
    };
    EditBandsByFansPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditBandsByFansPage');
    };
    EditBandsByFansPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-bands-by-fans',template:/*ion-inline-start:"/Users/robertmartin/RadioWRXBetaTest1/src/pages/edit-bands-by-fans/edit-bands-by-fans.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>EditBandsByFans</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form class="new-user-form" [formGroup]="validations_form" (ngSubmit)="onSubmit(validations_form.value)">\n    <ion-item>\n      <ion-label floating color="primary">Title</ion-label>\n      <ion-input type="text" formControlName="title" class="form-control" required></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating color="primary">Description</ion-label>\n      <ion-input type="text" formControlName="description" class="form-control" required></ion-input>\n    </ion-item>\n    <button class="form-action-button" ion-button block type="submit" [disabled]="!validations_form.valid">Save</button>\n  </form>\n  <button class="form-action-button" ion-button block color="danger" (click)="delete()">Delete</button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/robertmartin/RadioWRXBetaTest1/src/pages/edit-bands-by-fans/edit-bands-by-fans.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__services_firebase_service__["a" /* FirebaseService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], EditBandsByFansPage);
    return EditBandsByFansPage;
}());

//# sourceMappingURL=edit-bands-by-fans.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewBandMembersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_firebase_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__band_member_details_band_member_details__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__edit_band_member_edit_band_member__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__create_band_member_create_band_member__ = __webpack_require__(180);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ViewBandMembersPage = /** @class */ (function () {
    function ViewBandMembersPage(navCtrl, navParams, authService, firebaseService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.firebaseService = firebaseService;
    }
    ViewBandMembersPage.prototype.goToCreateBandMembersPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__create_band_member_create_band_member__["a" /* CreateBandMemberPage */]);
    };
    ViewBandMembersPage.prototype.ionViewWillEnter = function () {
        this.getData();
    };
    ViewBandMembersPage.prototype.getData = function () {
        var _this = this;
        this.firebaseService.getMembers()
            .then(function (members) {
            _this.items = members;
        });
    };
    ViewBandMembersPage.prototype.viewBandMembersDetails = function (id, item) {
        //refId = 'shit';
        // debugger
        var data = {
            name: item.name,
            biography: item.biography,
            image: item.image,
            instrument: item.instrument,
            dob: item.dob
            //id: item.id
        };
        localStorage.setItem("id", id);
        //alert(id);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__band_member_details_band_member_details__["a" /* BandMemberDetailsPage */], {
            data: data
        });
        console.log(data);
    };
    ViewBandMembersPage.prototype.editBandMembersDetails = function (id, item) {
        //refId = 'shit';
        // debugger
        var data = {
            name: item.name,
            biography: item.biography,
            image: item.image,
            instrument: item.instrument,
            dob: item.dob
            //id: item.id
        };
        localStorage.setItem("id", id);
        //alert(id);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__edit_band_member_edit_band_member__["a" /* EditBandMemberPage */], {
            data: data
        });
        console.log(data);
    };
    ViewBandMembersPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ViewBandMembersPage');
    };
    ViewBandMembersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-view-band-members',template:/*ion-inline-start:"/Users/robertmartin/RadioWRXBetaTest1/src/pages/view-band-members/view-band-members.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Band Members</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="goToCreateBandMembersPage()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="list-mini-content">\n  <div class="list-mini">\n    <ion-list small>\n      <ion-item *ngFor="let item of items">\n        <ion-grid>\n          <ion-row>\n            <ion-col col-2>\n              <ion-avatar item-start>\n                <img [src]="item.payload.doc.data().image">\n              </ion-avatar>\n            </ion-col>\n            <ion-col col-6>\n              <h3>{{ item.payload.doc.data().name }}</h3>\n            </ion-col>\n            <ion-col col-2>\n              <button ion-button clear color="danger" (click)="editBandMembersDetails(item.payload.doc.id,item.payload.doc.data())">Edit</button>\n            </ion-col>\n            <ion-col col-2>\n              <button ion-button clear color="Primary" (click)="viewBandMembersDetails(item.payload.doc.id,item.payload.doc.data())">View</button>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n    </ion-list>\n  </div>\n  <h5 text-center>Click&nbsp;&nbsp;<ion-icon name="add"></ion-icon>&nbsp;&nbsp;to create band member</h5>\n</ion-content>\n'/*ion-inline-end:"/Users/robertmartin/RadioWRXBetaTest1/src/pages/view-band-members/view-band-members.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__services_firebase_service__["a" /* FirebaseService */]])
    ], ViewBandMembersPage);
    return ViewBandMembersPage;
}());

//# sourceMappingURL=view-band-members.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditBandMemberPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_firebase_service__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditBandMemberPage = /** @class */ (function () {
    function EditBandMemberPage(navParams, viewCtrl, toastCtrl, alertCtrl, formBuilder, firebaseService, loadingCtrl) {
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.formBuilder = formBuilder;
        this.firebaseService = firebaseService;
        this.loadingCtrl = loadingCtrl;
    }
    EditBandMemberPage.prototype.ionViewWillLoad = function () {
        this.getData();
    };
    EditBandMemberPage.prototype.getData = function () {
        this.item = this.navParams.get('data');
        this.image = this.item.image;
        this.validations_form = this.formBuilder.group({
            name: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](this.item.name, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            biography: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](this.item.biography, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            instrument: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](this.item.instrument, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            dob: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](this.item.dob, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required)
        });
        console.log(this.item);
    };
    EditBandMemberPage.prototype.delete = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Confirm',
            message: 'Do you want to delete ' + this.item.name + '?',
            buttons: [
                {
                    text: 'No',
                    handler: function () { }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        _this.firebaseService.deleteMember(_this.item.id)
                            .then(function (res) { return _this.viewCtrl.dismiss(); }, function (err) { return console.log(err); });
                    }
                }
            ]
        });
        confirm.present();
    };
    EditBandMemberPage.prototype.onSubmit = function (value) {
        var _this = this;
        var data = {
            name: value.name,
            biography: value.biography,
            image: this.image,
            instrument: value.instrument,
            dob: value.dob
        };
        this.firebaseService.updateMember(this.item.id, data)
            .then(function (res) {
            _this.viewCtrl.dismiss();
        });
    };
    EditBandMemberPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditBandMemberPage');
    };
    EditBandMemberPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-band-member',template:/*ion-inline-start:"/Users/robertmartin/RadioWRXBetaTest1/src/pages/edit-band-member/edit-band-member.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Edit {{ this.item.name }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-card>\n    <ion-row no-padding class="user-image-row">\n      <ion-col no-padding col-6 offset-3>\n        <img [src]="image" alt="this is the image"/>\n      </ion-col>\n    </ion-row>\n    <ion-row no-padding class="user-image-row">\n      <ion-col no-padding width-60>\n        <button class="image-action-button" ion-button outline block small (click)="openImagePicker()">Change Picture</button>\n      </ion-col>\n    </ion-row>\n    <form class="new-user-form" [formGroup]="validations_form" (ngSubmit)="onSubmit(validations_form.value)">\n      <ion-item>\n        <ion-label floating color="primary">Title</ion-label>\n        <ion-input type="text" formControlName="name" class="form-control" required></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating color="primary">Description</ion-label>\n        <ion-textarea type="text" formControlName="biography" class="form-control" required></ion-textarea>\n      </ion-item>\n      <ion-item>\n        <ion-label>Instrument</ion-label>\n        <ion-select multiple="true" formControlName="instrument">\n          <ion-option value="Vocals">Vocals</ion-option>\n          <ion-option value="Guitar">Guitar</ion-option>\n          <ion-option value="Bass">Bass</ion-option>\n          <ion-option value="Drums">Drums</ion-option>\n          <ion-option value="Piano">Piano</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label>DOB</ion-label>\n        <ion-datetime displayFormat="MM/DD/YYYY" pickerFormat="MM/DD/YYYY" formControlName="dob"></ion-datetime>\n      </ion-item>\n      <button class="form-action-button" ion-button block type="submit" [disabled]="!validations_form.valid">Save</button>\n    </form>\n    <button class="form-action-button" ion-button block color="danger" (click)="delete()">Delete</button>\n\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/robertmartin/RadioWRXBetaTest1/src/pages/edit-band-member/edit-band-member.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__services_firebase_service__["a" /* FirebaseService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], EditBandMemberPage);
    return EditBandMemberPage;
}());

//# sourceMappingURL=edit-band-member.js.map

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateBandMemberPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_firebase_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_image_picker__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CreateBandMemberPage = /** @class */ (function () {
    function CreateBandMemberPage(viewCtrl, toastCtrl, formBuilder, firebaseService, loadingCtrl, imagePicker) {
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.formBuilder = formBuilder;
        this.firebaseService = firebaseService;
        this.loadingCtrl = loadingCtrl;
        this.imagePicker = imagePicker;
    }
    CreateBandMemberPage.prototype.ionViewWillLoad = function () {
        this.resetFields();
    };
    CreateBandMemberPage.prototype.resetFields = function () {
        this.image = "./assets/imgs/profile.png";
        this.validations_form = this.formBuilder.group({
            name: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            biography: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            instrument: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            dob: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required)
        });
    };
    CreateBandMemberPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    CreateBandMemberPage.prototype.onSubmit = function (value) {
        var _this = this;
        var data = {
            name: value.name,
            biography: value.biography,
            image: this.image,
            instrument: value.instrument,
            dob: value.dob
        };
        this.firebaseService.createMember(data)
            .then(function (res) {
            _this.resetFields();
            _this.viewCtrl.dismiss();
        });
    };
    CreateBandMemberPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreateBandMemberPage');
    };
    CreateBandMemberPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-create-band-member',template:/*ion-inline-start:"/Users/robertmartin/RadioWRXBetaTest1/src/pages/create-band-member/create-band-member.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Add Band Member</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="dismiss()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-card>\n    <ion-row no-padding>\n      <ion-col>\n      </ion-col>\n      <ion-col>\n        <img [src]="image" alt="this is the image"/>\n      </ion-col>\n      <ion-col>\n      </ion-col>\n    </ion-row>\n    <ion-row no-padding class="user-image-row">\n      <ion-col>\n        <button class="image-action-button" ion-button outline block small (click)="openImagePicker()">Change Picture</button>\n      </ion-col>\n    </ion-row>\n    <form class="new-user-form" [formGroup]="validations_form" (ngSubmit)="onSubmit(validations_form.value)">\n      <ion-item>\n        <ion-label floating color="primary">Name</ion-label>\n        <ion-input type="text" small formControlName="name" class="form-control" required></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating color="primary">Biography</ion-label>\n        <ion-textarea type="text" formControlName="biography" class="form-control" required></ion-textarea>\n      </ion-item>\n      <ion-item>\n        <ion-label>Instrument</ion-label>\n        <ion-select multiple="true" formControlName="instrument">\n          <ion-option value="Vocals">Vocals</ion-option>\n          <ion-option value="Guitar">Guitar</ion-option>\n          <ion-option value="Bass">Bass</ion-option>\n          <ion-option value="Drums">Drums</ion-option>\n          <ion-option value="Piano">Piano</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label>DOB</ion-label>\n        <ion-datetime displayFormat="MM/DD/YYYY" pickerFormat="MM/DD/YYYY" formControlName="dob"></ion-datetime>\n      </ion-item>\n      <button class="form-action-button" ion-button block type="submit" [disabled]="!validations_form.valid">Create</button>\n    </form>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/robertmartin/RadioWRXBetaTest1/src/pages/create-band-member/create-band-member.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__services_firebase_service__["a" /* FirebaseService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_image_picker__["a" /* ImagePicker */]])
    ], CreateBandMemberPage);
    return CreateBandMemberPage;
}());

//# sourceMappingURL=create-band-member.js.map

/***/ }),

/***/ 218:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 218;

/***/ }),

/***/ 259:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/album-details/album-details.module": [
		538,
		21
	],
	"../pages/band-event-details/band-event-details.module": [
		539,
		20
	],
	"../pages/band-member-details/band-member-details.module": [
		540,
		19
	],
	"../pages/band-profile/band-profile.module": [
		541,
		18
	],
	"../pages/band-view-album/band-view-album.module": [
		543,
		17
	],
	"../pages/bands-by-fans-details/bands-by-fans-details.module": [
		542,
		16
	],
	"../pages/create-album/create-album.module": [
		545,
		15
	],
	"../pages/create-band-event/create-band-event.module": [
		544,
		14
	],
	"../pages/create-band-member/create-band-member.module": [
		546,
		13
	],
	"../pages/create-bands-by-fans/create-bands-by-fans.module": [
		547,
		12
	],
	"../pages/edit-album/edit-album.module": [
		548,
		11
	],
	"../pages/edit-band-event/edit-band-event.module": [
		549,
		10
	],
	"../pages/edit-band-member/edit-band-member.module": [
		550,
		9
	],
	"../pages/edit-bands-by-fans/edit-bands-by-fans.module": [
		551,
		8
	],
	"../pages/edit-song/edit-song.module": [
		552,
		7
	],
	"../pages/new-album-modal/new-album-modal.module": [
		553,
		6
	],
	"../pages/new-band-event-modal/new-band-event-modal.module": [
		554,
		5
	],
	"../pages/new-band-member-modal/new-band-member-modal.module": [
		556,
		4
	],
	"../pages/new-song-modal/new-song-modal.module": [
		555,
		3
	],
	"../pages/view-band-events/view-band-events.module": [
		557,
		2
	],
	"../pages/view-band-members/view-band-members.module": [
		558,
		1
	],
	"../pages/view-bands-by-fans/view-bands-by-fans.module": [
		559,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 259;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, authService, formBuilder) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.errorMessage = '';
        this.successMessage = '';
        this.validation_messages = {
            'email': [
                { type: 'required', message: 'Email is required.' },
                { type: 'pattern', message: 'Enter a valid email.' }
            ],
            'password': [
                { type: 'required', message: 'Password is required.' },
                { type: 'minlength', message: 'Password must be at least 5 characters long.' }
            ]
        };
    }
    RegisterPage.prototype.ionViewWillLoad = function () {
        this.validations_form = this.formBuilder.group({
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            password: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(5),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required
            ])),
        });
    };
    RegisterPage.prototype.tryRegister = function (value) {
        var _this = this;
        this.authService.doRegister(value)
            .then(function (res) {
            console.log(res);
            _this.errorMessage = "";
            _this.successMessage = "Your account has been created. Please log in.";
        }, function (err) {
            console.log(err);
            _this.errorMessage = err.message;
            _this.successMessage = "";
        });
    };
    RegisterPage.prototype.goLoginPage = function () {
        this.navCtrl.pop();
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"/Users/robertmartin/RadioWRXBetaTest1/src/pages/register/register.html"*/'<form class="form" [formGroup]="validations_form"  (ngSubmit)="tryRegister(validations_form.value)">\n  <ion-item>\n    <ion-label floating color="primary">Email</ion-label>\n    <ion-input type="text" formControlName="email"></ion-input>\n  </ion-item>\n  <div class="validation-errors">\n    <ng-container *ngFor="let validation of validation_messages.email">\n      <div class="error-message" *ngIf="validations_form.get(\'email\').hasError(validation.type) && (validations_form.get(\'email\').dirty || validations_form.get(\'email\').touched)">\n        {{ validation.message }}\n      </div>\n    </ng-container>\n  </div>\n\n  <ion-item>\n    <ion-label floating color="primary">Password</ion-label>\n    <ion-input type="password" formControlName="password" class="form-controll" required></ion-input>\n  </ion-item>\n  <div class="validation-errors">\n    <ng-container *ngFor="let validation of validation_messages.password">\n      <div class="error-message" *ngIf="validations_form.get(\'password\').hasError(validation.type) && (validations_form.get(\'password\').dirty || validations_form.get(\'password\').touched)">\n        {{ validation.message }}\n      </div>\n    </ng-container>\n  </div>\n\n  <button class="submit-btn" ion-button block type="submit" [disabled]="!validations_form.valid">Register</button>\n  <label class="error-message">{{errorMessage}}</label>\n  <label class="success-message">{{successMessage}}</label>\n</form>\n'/*ion-inline-end:"/Users/robertmartin/RadioWRXBetaTest1/src/pages/register/register.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/Users/robertmartin/RadioWRXBetaTest1/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/robertmartin/RadioWRXBetaTest1/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/Users/robertmartin/RadioWRXBetaTest1/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/robertmartin/RadioWRXBetaTest1/src/pages/contact/contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/robertmartin/RadioWRXBetaTest1/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h2>Welcome to Ionic!</h2>\n  <p>\n    This starter project comes with simple tabs-based layout for apps\n    that are going to primarily use a Tabbed UI.\n  </p>\n  <p>\n    Take a look at the <code>src/pages/</code> directory to add or change tabs,\n    update any existing page or create new pages.\n  </p>\n</ion-content>\n'/*ion-inline-end:"/Users/robertmartin/RadioWRXBetaTest1/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_firebase_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__new_task_modal_new_task_modal__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__details_details__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__view_band_events_view_band_events__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__create_album_create_album__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__view_bands_by_fans_view_bands_by_fans__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__view_band_members_view_band_members__ = __webpack_require__(178);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var MenuPage = /** @class */ (function () {
    function MenuPage(navCtrl, modalCtrl, authService, firebaseService) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.authService = authService;
        this.firebaseService = firebaseService;
    }
    MenuPage.prototype.ionViewWillEnter = function () {
        this.getData();
    };
    MenuPage.prototype.getData = function () {
        var _this = this;
        this.firebaseService.getTasks()
            .then(function (tasks) {
            _this.items = tasks;
        });
    };
    MenuPage.prototype.viewDetails = function (id, item) {
        // debugger
        var data = {
            title: item.title,
            description: item.description,
            image: item.image,
            id: id
        };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__details_details__["a" /* DetailsPage */], {
            data: data
        });
    };
    MenuPage.prototype.openNewUserModal = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__new_task_modal_new_task_modal__["a" /* NewTaskModalPage */]);
        modal.onDidDismiss(function (data) {
            _this.getData();
        });
        modal.present();
    };
    MenuPage.prototype.logout = function () {
        var _this = this;
        this.authService.doLogout()
            .then(function (res) {
            _this.navCtrl.parent.parent.setRoot(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
        });
    };
    MenuPage.prototype.goToViewBandMember = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__view_band_members_view_band_members__["a" /* ViewBandMembersPage */]);
    };
    MenuPage.prototype.goToCreateBandEvent = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__view_band_events_view_band_events__["a" /* ViewBandEventsPage */]);
    };
    MenuPage.prototype.goToCreateAlbum = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__create_album_create_album__["a" /* CreateAlbumPage */]);
    };
    MenuPage.prototype.goToCreateBandsByFans = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__view_bands_by_fans_view_bands_by_fans__["a" /* ViewBandsByFansPage */]);
    };
    MenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-menu',template:/*ion-inline-start:"/Users/robertmartin/RadioWRXBetaTest1/src/pages/menu/menu.html"*/'<ion-header>\n  <ion-toolbar color="secondary">\n    <ion-title>Profile</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="openNewUserModal()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons right>\n      <button ion-button icon-only (click)="logout()">\n        <ion-icon name="log-out"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content class="list-mini-content">\n  <div class="list-mini">\n    <ion-list>\n      <ion-item *ngFor="let item of items" (click)="viewDetails(item.payload.doc.id,item.payload.doc.data())">\n        <ion-thumbnail item-start>\n          <img [src]="item.payload.doc.data().image">\n        </ion-thumbnail>\n        <h2>{{item.payload.doc.data().title}}</h2>\n        <button ion-button clear item-end>Details</button>\n      </ion-item>\n    </ion-list>\n  </div>\n  <button ion-button block color="primary" (click)="goToViewBandMember()">Band Members</button>\n  <button ion-button block color="primary" (click)="goToCreateBandEvent()">Events</button>\n  <button ion-button block color="primary" (click)="goToCreateAlbum()">Music</button>\n  <button ion-button block color="primary" (click)="goToCreateBandsByFans()">Bands By Fans</button>\n</ion-content>\n<ion-footer (click)="logout()">\n  <ion-toolbar color="secondary">\n    <ion-title>Log out</ion-title>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/robertmartin/RadioWRXBetaTest1/src/pages/menu/menu.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__services_firebase_service__["a" /* FirebaseService */]])
    ], MenuPage);
    return MenuPage;
}());

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewTaskModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_firebase_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_image_picker__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewTaskModalPage = /** @class */ (function () {
    function NewTaskModalPage(viewCtrl, toastCtrl, formBuilder, firebaseService, loadingCtrl, imagePicker) {
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.formBuilder = formBuilder;
        this.firebaseService = firebaseService;
        this.loadingCtrl = loadingCtrl;
        this.imagePicker = imagePicker;
        this.loading = this.loadingCtrl.create();
    }
    NewTaskModalPage.prototype.ionViewWillLoad = function () {
        this.resetFields();
    };
    NewTaskModalPage.prototype.resetFields = function () {
        this.image = "./assets/imgs/profile.png";
        this.validations_form = this.formBuilder.group({
            title: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            description: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required)
        });
    };
    NewTaskModalPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    NewTaskModalPage.prototype.onSubmit = function (value) {
        var _this = this;
        var data = {
            title: value.title,
            description: value.description,
            image: this.image
        };
        this.firebaseService.createTask(data)
            .then(function (res) {
            _this.resetFields();
            _this.viewCtrl.dismiss();
        });
    };
    NewTaskModalPage.prototype.openImagePicker = function () {
        var _this = this;
        this.imagePicker.hasReadPermission()
            .then(function (result) {
            if (result == false) {
                // no callbacks required as this opens a popup which returns async
                _this.imagePicker.requestReadPermission();
            }
            else if (result == true) {
                _this.imagePicker.getPictures({
                    maximumImagesCount: 1
                }).then(function (results) {
                    for (var i = 0; i < results.length; i++) {
                        _this.uploadImageToFirebase(results[i]);
                    }
                }, function (err) { return console.log(err); });
            }
        }, function (err) {
            console.log(err);
        });
    };
    NewTaskModalPage.prototype.uploadImageToFirebase = function (image) {
        var _this = this;
        this.loading.present();
        image = Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* normalizeURL */])(image);
        var randomId = Math.random().toString(36).substr(2, 5);
        //uploads img to firebase storage
        this.firebaseService.uploadImage(image, randomId)
            .then(function (photoURL) {
            _this.image = photoURL;
            _this.loading.dismiss();
            var toast = _this.toastCtrl.create({
                message: 'Image was updated successfully',
                duration: 3000
            });
            toast.present();
        });
    };
    NewTaskModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-new-task-modal',template:/*ion-inline-start:"/Users/robertmartin/RadioWRXBetaTest1/src/pages/new-task-modal/new-task-modal.html"*/'<ion-header>\n  <ion-navbar color="secondary">\n    <ion-buttons start>\n      <button ion-button icon-only (click)="dismiss()">\n        <ion-icon name="md-arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>\n      New Task\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div>\n    <ion-row no-padding>\n      <ion-col no-padding col-6 offset-3>\n        <img [src]="image" alt="this is the image"/>\n      </ion-col>\n    </ion-row>\n    <ion-row no-padding class="user-image-row">\n      <ion-col no-padding width-60>\n        <button class="image-action-button" ion-button outline block small (click)="openImagePicker()">Change Picture</button>\n      </ion-col>\n    </ion-row>\n  </div>\n  <form class="new-user-form" [formGroup]="validations_form" (ngSubmit)="onSubmit(validations_form.value)">\n    <ion-item>\n      <ion-label floating color="primary">Title</ion-label>\n      <ion-input type="text" formControlName="title" class="form-control" required></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating color="primary">Description</ion-label>\n      <ion-input type="text" formControlName="description" class="form-control" required></ion-input>\n    </ion-item>\n    <button class="form-action-button" ion-button block type="submit" [disabled]="!validations_form.valid">Create</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/robertmartin/RadioWRXBetaTest1/src/pages/new-task-modal/new-task-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__services_firebase_service__["a" /* FirebaseService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_image_picker__["a" /* ImagePicker */]])
    ], NewTaskModalPage);
    return NewTaskModalPage;
}());

//# sourceMappingURL=new-task-modal.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_firebase_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_image_picker__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DetailsPage = /** @class */ (function () {
    function DetailsPage(navParams, alertCtrl, viewCtrl, toastCtrl, formBuilder, firebaseService, loadingCtrl, imagePicker) {
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.formBuilder = formBuilder;
        this.firebaseService = firebaseService;
        this.loadingCtrl = loadingCtrl;
        this.imagePicker = imagePicker;
        this.loading = this.loadingCtrl.create();
    }
    DetailsPage.prototype.ionViewWillLoad = function () {
        this.getData();
    };
    DetailsPage.prototype.getData = function () {
        this.item = this.navParams.get('data');
        this.image = this.item.image;
        this.validations_form = this.formBuilder.group({
            title: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](this.item.title, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            description: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](this.item.description, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required)
        });
    };
    DetailsPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    DetailsPage.prototype.onSubmit = function (value) {
        var _this = this;
        var data = {
            title: value.title,
            description: value.description,
            image: this.image
        };
        this.firebaseService.updateTask(this.item.id, data)
            .then(function (res) {
            _this.viewCtrl.dismiss();
        });
    };
    DetailsPage.prototype.delete = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Confirm',
            message: 'Do you want to delete ' + this.item.title + '?',
            buttons: [
                {
                    text: 'No',
                    handler: function () { }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        _this.firebaseService.deleteTask(_this.item.id)
                            .then(function (res) { return _this.viewCtrl.dismiss(); }, function (err) { return console.log(err); });
                    }
                }
            ]
        });
        confirm.present();
    };
    DetailsPage.prototype.openImagePicker = function () {
        var _this = this;
        this.imagePicker.hasReadPermission()
            .then(function (result) {
            if (result == false) {
                // no callbacks required as this opens a popup which returns async
                _this.imagePicker.requestReadPermission();
            }
            else if (result == true) {
                _this.imagePicker.getPictures({
                    maximumImagesCount: 1
                }).then(function (results) {
                    for (var i = 0; i < results.length; i++) {
                        _this.uploadImageToFirebase(results[i]);
                    }
                }, function (err) { return console.log(err); });
            }
        }, function (err) {
            console.log(err);
        });
    };
    DetailsPage.prototype.uploadImageToFirebase = function (image) {
        var _this = this;
        this.loading.present();
        image = Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* normalizeURL */])(image);
        var randomId = Math.random().toString(36).substr(2, 5);
        console.log(randomId);
        //uploads img to firebase storage
        this.firebaseService.uploadImage(image, randomId)
            .then(function (photoURL) {
            _this.image = photoURL;
            _this.loading.dismiss();
            var toast = _this.toastCtrl.create({
                message: 'Image was updated successfully',
                duration: 3000
            });
            toast.present();
        });
    };
    DetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-details',template:/*ion-inline-start:"/Users/robertmartin/RadioWRXBetaTest1/src/pages/details/details.html"*/'<ion-header>\n  <ion-navbar color="secondary">\n    <ion-title>\n      Update Task\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="user-image-content">\n    <ion-row no-padding class="user-image-row">\n      <ion-col no-padding col-6 offset-3>\n        <img [src]="image" alt="this is the image"/>\n      </ion-col>\n    </ion-row>\n    <ion-row no-padding class="user-image-row">\n      <ion-col no-padding width-60>\n        <button class="image-action-button" ion-button outline block small (click)="openImagePicker()">Change Picture</button>\n      </ion-col>\n    </ion-row>\n  </div>\n  <form class="new-user-form" [formGroup]="validations_form" (ngSubmit)="onSubmit(validations_form.value)">\n    <ion-item>\n      <ion-label floating color="primary">Title</ion-label>\n      <ion-input type="text" formControlName="title" class="form-control" required></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating color="primary">Description</ion-label>\n      <ion-input type="text" formControlName="description" class="form-control" required></ion-input>\n    </ion-item>\n    <button class="form-action-button" ion-button block type="submit" [disabled]="!validations_form.valid">Save</button>\n  </form>\n  <button class="form-action-button" ion-button block color="danger" (click)="delete()">Delete</button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/robertmartin/RadioWRXBetaTest1/src/pages/details/details.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__services_firebase_service__["a" /* FirebaseService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_image_picker__["a" /* ImagePicker */]])
    ], DetailsPage);
    return DetailsPage;
}());

//# sourceMappingURL=details.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyDNPfUoogTHPzxtdKo_-kk4F835ZzTzj3U",
        authDomain: "radiowrxbetatest.firebaseapp.com",
        databaseURL: "https://radiowrxbetatest.firebaseio.com",
        projectId: "radiowrxbetatest",
        storageBucket: "radiowrxbetatest.appspot.com",
        messagingSenderId: "1070813702872"
    }
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlbumDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_firebase_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_image_picker__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the AlbumDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AlbumDetailsPage = /** @class */ (function () {
    function AlbumDetailsPage(navParams, alertCtrl, viewCtrl, toastCtrl, formBuilder, firebaseService, loadingCtrl, imagePicker) {
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.formBuilder = formBuilder;
        this.firebaseService = firebaseService;
        this.loadingCtrl = loadingCtrl;
        this.imagePicker = imagePicker;
        this.loading = this.loadingCtrl.create();
    }
    AlbumDetailsPage.prototype.ionViewWillLoad = function () {
        this.getData();
    };
    AlbumDetailsPage.prototype.getData = function () {
        this.item = this.navParams.get('data');
        this.image = this.item.image;
        this.validations_form = this.formBuilder.group({
            title: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](this.item.title, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            description: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](this.item.description, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required)
        });
        console.log(this.item);
    };
    AlbumDetailsPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    AlbumDetailsPage.prototype.onSubmit = function (value) {
        var _this = this;
        var data = {
            title: value.title,
            description: value.description,
            image: this.image
        };
        this.firebaseService.updateAlbum(this.item.id, data)
            .then(function (res) {
            _this.viewCtrl.dismiss();
        });
    };
    AlbumDetailsPage.prototype.delete = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Confirm',
            message: 'Do you want to delete ' + this.item.title + '?',
            buttons: [
                {
                    text: 'No',
                    handler: function () { }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        _this.firebaseService.deleteAlbum(_this.item.id)
                            .then(function (res) { return _this.viewCtrl.dismiss(); }, function (err) { return console.log(err); });
                    }
                }
            ]
        });
        confirm.present();
    };
    AlbumDetailsPage.prototype.openImagePicker = function () {
        var _this = this;
        this.imagePicker.hasReadPermission()
            .then(function (result) {
            if (result == false) {
                // no callbacks required as this opens a popup which returns async
                _this.imagePicker.requestReadPermission();
            }
            else if (result == true) {
                _this.imagePicker.getPictures({
                    maximumImagesCount: 1
                }).then(function (results) {
                    for (var i = 0; i < results.length; i++) {
                        _this.uploadImageToFirebase(results[i]);
                    }
                }, function (err) { return console.log(err); });
            }
        }, function (err) {
            console.log(err);
        });
    };
    AlbumDetailsPage.prototype.uploadImageToFirebase = function (image) {
        var _this = this;
        this.loading.present();
        image = Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* normalizeURL */])(image);
        var randomId = Math.random().toString(36).substr(2, 5);
        console.log(randomId);
        //uploads img to firebase storage
        this.firebaseService.uploadImage(image, randomId)
            .then(function (photoURL) {
            _this.image = photoURL;
            _this.loading.dismiss();
            var toast = _this.toastCtrl.create({
                message: 'Image was updated successfully',
                duration: 3000
            });
            toast.present();
        });
    };
    AlbumDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AlbumDetailsPage');
    };
    AlbumDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-album-details',template:/*ion-inline-start:"/Users/robertmartin/RadioWRXBetaTest1/src/pages/album-details/album-details.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{this.item.title}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class="user-image-content">\n    <ion-row no-padding class="user-image-row">\n      <ion-col no-padding col-6 offset-3>\n        <img [src]="image" alt="this is the image"/>\n      </ion-col>\n    </ion-row>\n    <ion-row no-padding class="user-image-row">\n      <ion-col no-padding width-60>\n        <button class="image-action-button" ion-button outline block small (click)="openImagePicker()">Change Picture</button>\n      </ion-col>\n    </ion-row>\n  </div>\n  <form class="new-user-form" [formGroup]="validations_form" (ngSubmit)="onSubmit(validations_form.value)">\n    <ion-item>\n      <ion-label floating color="primary">Title</ion-label>\n      <ion-input type="text" formControlName="title" class="form-control" required></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating color="primary">Description</ion-label>\n      <ion-input type="text" formControlName="description" class="form-control" required></ion-input>\n    </ion-item>\n    <button class="form-action-button" ion-button block type="submit" [disabled]="!validations_form.valid">Save</button>\n  </form>\n  <button class="form-action-button" ion-button block color="danger" (click)="delete()">Delete</button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/robertmartin/RadioWRXBetaTest1/src/pages/album-details/album-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__services_firebase_service__["a" /* FirebaseService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_image_picker__["a" /* ImagePicker */]])
    ], AlbumDetailsPage);
    return AlbumDetailsPage;
}());

//# sourceMappingURL=album-details.js.map

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BandProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the BandProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BandProfilePage = /** @class */ (function () {
    function BandProfilePage(navCtrl, navParams, authService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
    }
    BandProfilePage.prototype.logOut = function () {
        var _this = this;
        this.authService.doLogout()
            .then(function (data) {
            _this.navCtrl.parent.parent.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
        })
            .catch(function (error) {
            console.dir(error);
        });
    };
    BandProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BandProfilePage');
    };
    BandProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-band-profile',template:/*ion-inline-start:"/Users/robertmartin/RadioWRXBetaTest1/src/pages/band-profile/band-profile.html"*/'<!--\n  Generated template for the BandProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>BandProfile</ion-title>\n    <ion-buttons right>\n      <button ion-button icon-only (click)="logOut()">\n        <ion-icon name="log-out"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/robertmartin/RadioWRXBetaTest1/src/pages/band-profile/band-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]])
    ], BandProfilePage);
    return BandProfilePage;
}());

//# sourceMappingURL=band-profile.js.map

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewBandEventModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_firebase_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_image_picker__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewBandEventModalPage = /** @class */ (function () {
    function NewBandEventModalPage(viewCtrl, toastCtrl, formBuilder, firebaseService, loadingCtrl, imagePicker) {
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.formBuilder = formBuilder;
        this.firebaseService = firebaseService;
        this.loadingCtrl = loadingCtrl;
        this.imagePicker = imagePicker;
    }
    NewBandEventModalPage.prototype.ionViewWillLoad = function () {
        this.resetFields();
    };
    NewBandEventModalPage.prototype.resetFields = function () {
        this.image = "./assets/imgs/calendar.png";
        this.validations_form = this.formBuilder.group({
            title: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            description: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required)
        });
    };
    NewBandEventModalPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    NewBandEventModalPage.prototype.onSubmit = function (value) {
        var _this = this;
        var data = {
            title: value.title,
            description: value.description,
            image: this.image
        };
        this.firebaseService.createEvent(data)
            .then(function (res) {
            _this.resetFields();
            _this.viewCtrl.dismiss();
        });
    };
    NewBandEventModalPage.prototype.openImagePicker = function () {
        var _this = this;
        this.imagePicker.hasReadPermission()
            .then(function (result) {
            if (result == false) {
                // no callbacks required as this opens a popup which returns async
                _this.imagePicker.requestReadPermission();
            }
            else if (result == true) {
                _this.imagePicker.getPictures({
                    maximumImagesCount: 1
                }).then(function (results) {
                    for (var i = 0; i < results.length; i++) {
                        _this.uploadImageToFirebase(results[i]);
                    }
                }, function (err) { return console.log(err); });
            }
        }, function (err) {
            console.log(err);
        });
    };
    NewBandEventModalPage.prototype.uploadImageToFirebase = function (image) {
        var _this = this;
        this.loading.present();
        image = Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* normalizeURL */])(image);
        var randomId = Math.random().toString(36).substr(2, 5);
        //uploads img to firebase storage
        this.firebaseService.uploadImage(image, randomId)
            .then(function (photoURL) {
            _this.image = photoURL;
            _this.loading.dismiss();
            var toast = _this.toastCtrl.create({
                message: 'Image was updated successfully',
                duration: 3000
            });
            toast.present();
        });
    };
    NewBandEventModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewBandEventModalPage');
    };
    NewBandEventModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-new-band-event-modal',template:/*ion-inline-start:"/Users/robertmartin/RadioWRXBetaTest1/src/pages/new-band-event-modal/new-band-event-modal.html"*/'<ion-header>\n\n  <ion-navbar color="dark">\n    <ion-buttons start>\n      <button ion-button icon-only (click)="dismiss()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>\n      Events\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div>\n    <ion-row no-padding>\n      <ion-col no-padding col-6 offset-3>\n        <img [src]="image" alt="this is the image"/>\n      </ion-col>\n    </ion-row>\n    <ion-row no-padding class="user-image-row">\n      <ion-col no-padding width-60>\n        <button class="image-action-button" ion-button outline block small (click)="openImagePicker()">Change Picture</button>\n      </ion-col>\n    </ion-row>\n  </div>\n  <form class="new-user-form" [formGroup]="validations_form" (ngSubmit)="onSubmit(validations_form.value)">\n    <ion-item>\n      <ion-label floating color="primary">Title</ion-label>\n      <ion-input type="text" formControlName="title" class="form-control" required></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating color="primary">Description</ion-label>\n      <ion-input type="text" formControlName="description" class="form-control" required></ion-input>\n    </ion-item>\n    <button class="form-action-button" ion-button block type="submit" [disabled]="!validations_form.valid">Create</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/robertmartin/RadioWRXBetaTest1/src/pages/new-band-event-modal/new-band-event-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__services_firebase_service__["a" /* FirebaseService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_image_picker__["a" /* ImagePicker */]])
    ], NewBandEventModalPage);
    return NewBandEventModalPage;
}());

//# sourceMappingURL=new-band-event-modal.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewBandMemberModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_firebase_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_image_picker__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewBandMemberModalPage = /** @class */ (function () {
    function NewBandMemberModalPage(viewCtrl, toastCtrl, formBuilder, firebaseService, loadingCtrl, imagePicker) {
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.formBuilder = formBuilder;
        this.firebaseService = firebaseService;
        this.loadingCtrl = loadingCtrl;
        this.imagePicker = imagePicker;
        this.loading = this.loadingCtrl.create();
    }
    NewBandMemberModalPage.prototype.ionViewWillLoad = function () {
        this.resetFields();
    };
    NewBandMemberModalPage.prototype.resetFields = function () {
        this.image = "./assets/imgs/profile.png";
        this.validations_form = this.formBuilder.group({
            title: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            description: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required)
        });
    };
    NewBandMemberModalPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    NewBandMemberModalPage.prototype.onSubmit = function (value) {
        var _this = this;
        var data = {
            title: value.title,
            description: value.description,
            image: this.image
        };
        this.firebaseService.createMember(data)
            .then(function (res) {
            _this.resetFields();
            _this.viewCtrl.dismiss();
        });
    };
    NewBandMemberModalPage.prototype.openImagePicker = function () {
        var _this = this;
        this.imagePicker.hasReadPermission()
            .then(function (result) {
            if (result == false) {
                // no callbacks required as this opens a popup which returns async
                _this.imagePicker.requestReadPermission();
            }
            else if (result == true) {
                _this.imagePicker.getPictures({
                    maximumImagesCount: 1
                }).then(function (results) {
                    for (var i = 0; i < results.length; i++) {
                        _this.uploadImageToFirebase(results[i]);
                    }
                }, function (err) { return console.log(err); });
            }
        }, function (err) {
            console.log(err);
        });
    };
    NewBandMemberModalPage.prototype.uploadImageToFirebase = function (image) {
        var _this = this;
        this.loading.present();
        image = Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* normalizeURL */])(image);
        var randomId = Math.random().toString(36).substr(2, 5);
        //uploads img to firebase storage
        this.firebaseService.uploadImage(image, randomId)
            .then(function (photoURL) {
            _this.image = photoURL;
            _this.loading.dismiss();
            var toast = _this.toastCtrl.create({
                message: 'Image was updated successfully',
                duration: 3000
            });
            toast.present();
        });
    };
    NewBandMemberModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewBandMemberModalPage');
    };
    NewBandMemberModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-new-band-member-modal',template:/*ion-inline-start:"/Users/robertmartin/RadioWRXBetaTest1/src/pages/new-band-member-modal/new-band-member-modal.html"*/'<ion-header>\n  <ion-navbar color="secondary">\n    <ion-buttons start>\n      <button ion-button icon-only (click)="dismiss()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>\n      New Task\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div>\n    <ion-row no-padding>\n      <ion-col no-padding col-6 offset-3>\n        <img [src]="image" alt="this is the image"/>\n      </ion-col>\n    </ion-row>\n    <ion-row no-padding class="user-image-row">\n      <ion-col no-padding width-60>\n        <button class="image-action-button" ion-button outline block small (click)="openImagePicker()">Change Picture</button>\n      </ion-col>\n    </ion-row>\n  </div>\n  <form class="new-user-form" [formGroup]="validations_form" (ngSubmit)="onSubmit(validations_form.value)">\n    <ion-item>\n      <ion-label floating color="primary">Title</ion-label>\n      <ion-input type="text" formControlName="title" class="form-control" required></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating color="primary">Description</ion-label>\n      <ion-input type="text" formControlName="description" class="form-control" required></ion-input>\n    </ion-item>\n    <button class="form-action-button" ion-button block type="submit" [disabled]="!validations_form.valid">Create</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/robertmartin/RadioWRXBetaTest1/src/pages/new-band-member-modal/new-band-member-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__services_firebase_service__["a" /* FirebaseService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_image_picker__["a" /* ImagePicker */]])
    ], NewBandMemberModalPage);
    return NewBandMemberModalPage;
}());

//# sourceMappingURL=new-band-member-modal.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(460);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__firebase_service__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(firebaseService) {
        this.firebaseService = firebaseService;
        __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"]().onAuthStateChanged(function (user) {
            if (user) {
                //User is signed in.
                console.log('User is signed in');
            }
            else {
                //No user signed in.
                console.log('User is NOT signed in');
            }
        });
    }
    AuthService.prototype.doRegister = function (value) {
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"]().createUserWithEmailAndPassword(value.email, value.password)
                .then(function (res) { return resolve(res); }, function (err) { return reject(err); });
        });
    };
    AuthService.prototype.doLogin = function (value) {
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"]().signInWithEmailAndPassword(value.email, value.password)
                .then(function (res) { return resolve(res); }, function (err) { return reject(err); });
        });
    };
    AuthService.prototype.doLogout = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (__WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"]().currentUser) {
                __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"]().signOut()
                    .then(function () {
                    _this.firebaseService.unsubscribeOnLogOut();
                    resolve();
                }).catch(function (error) {
                    reject();
                });
            }
        });
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__firebase_service__["a" /* FirebaseService */]])
    ], AuthService);
    return AuthService;
}());

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_image_picker__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_register_register__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_about_about__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_contact_contact__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_home__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_menu_menu__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_band_profile_band_profile__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_tabs_tabs__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_details_details__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_new_task_modal_new_task_modal__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_create_band_member_create_band_member__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_create_band_event_create_band_event__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_new_band_member_modal_new_band_member_modal__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_new_band_event_modal_new_band_event_modal__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_band_member_details_band_member_details__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_band_event_details_band_event_details__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_create_album_create_album__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_album_details_album_details__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_new_album_modal_new_album_modal__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_band_view_album_band_view_album__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_new_song_modal_new_song_modal__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_edit_song_edit_song__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_edit_band_member_edit_band_member__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_edit_band_event_edit_band_event__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_edit_album_edit_album__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_create_bands_by_fans_create_bands_by_fans__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_view_bands_by_fans_view_bands_by_fans__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_bands_by_fans_details_bands_by_fans_details__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_edit_bands_by_fans_edit_bands_by_fans__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_view_band_members_view_band_members__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_view_band_events_view_band_events__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_services_firebase_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_services_auth_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40_angularfire2__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_40_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41_angularfire2_firestore__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_41_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42_angularfire2_storage__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42_angularfire2_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_42_angularfire2_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43_angularfire2_auth__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_43_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__environment_environment__ = __webpack_require__(317);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_new_task_modal_new_task_modal__["a" /* NewTaskModalPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_details_details__["a" /* DetailsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_band_profile_band_profile__["a" /* BandProfilePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_create_band_member_create_band_member__["a" /* CreateBandMemberPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_new_band_member_modal_new_band_member_modal__["a" /* NewBandMemberModalPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_band_member_details_band_member_details__["a" /* BandMemberDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_create_band_event_create_band_event__["a" /* CreateBandEventPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_new_band_event_modal_new_band_event_modal__["a" /* NewBandEventModalPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_band_event_details_band_event_details__["a" /* BandEventDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_create_album_create_album__["a" /* CreateAlbumPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_album_details_album_details__["a" /* AlbumDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_new_album_modal_new_album_modal__["a" /* NewAlbumModalPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_band_view_album_band_view_album__["a" /* BandViewAlbumPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_new_song_modal_new_song_modal__["a" /* NewSongModalPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_edit_song_edit_song__["a" /* EditSongPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_edit_band_member_edit_band_member__["a" /* EditBandMemberPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_edit_band_event_edit_band_event__["a" /* EditBandEventPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_edit_album_edit_album__["a" /* EditAlbumPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_create_bands_by_fans_create_bands_by_fans__["a" /* CreateBandsByFansPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_view_bands_by_fans_view_bands_by_fans__["a" /* ViewBandsByFansPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_bands_by_fans_details_bands_by_fans_details__["a" /* BandsByFansDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_edit_bands_by_fans_edit_bands_by_fans__["a" /* EditBandsByFansPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_view_band_members_view_band_members__["a" /* ViewBandMembersPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_view_band_events_view_band_events__["a" /* ViewBandEventsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/album-details/album-details.module#AlbumDetailsPageModule', name: 'AlbumDetailsPage', segment: 'album-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/band-event-details/band-event-details.module#BandEventDetailsPageModule', name: 'BandEventDetailsPage', segment: 'band-event-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/band-member-details/band-member-details.module#BandMemberDetailsPageModule', name: 'BandMemberDetailsPage', segment: 'band-member-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/band-profile/band-profile.module#BandProfilePageModule', name: 'BandProfilePage', segment: 'band-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/bands-by-fans-details/bands-by-fans-details.module#BandsByFansDetailsPageModule', name: 'BandsByFansDetailsPage', segment: 'bands-by-fans-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/band-view-album/band-view-album.module#BandViewAlbumPageModule', name: 'BandViewAlbumPage', segment: 'band-view-album', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/create-band-event/create-band-event.module#CreateBandEventPageModule', name: 'CreateBandEventPage', segment: 'create-band-event', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/create-album/create-album.module#CreateAlbumPageModule', name: 'CreateAlbumPage', segment: 'create-album', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/create-band-member/create-band-member.module#CreateBandMemberPageModule', name: 'CreateBandMemberPage', segment: 'create-band-member', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/create-bands-by-fans/create-bands-by-fans.module#CreateBandsByFansPageModule', name: 'CreateBandsByFansPage', segment: 'create-bands-by-fans', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-album/edit-album.module#EditAlbumPageModule', name: 'EditAlbumPage', segment: 'edit-album', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-band-event/edit-band-event.module#EditBandEventPageModule', name: 'EditBandEventPage', segment: 'edit-band-event', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-band-member/edit-band-member.module#EditBandMemberPageModule', name: 'EditBandMemberPage', segment: 'edit-band-member', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-bands-by-fans/edit-bands-by-fans.module#EditBandsByFansPageModule', name: 'EditBandsByFansPage', segment: 'edit-bands-by-fans', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-song/edit-song.module#EditSongPageModule', name: 'EditSongPage', segment: 'edit-song', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/new-album-modal/new-album-modal.module#NewAlbumModalPageModule', name: 'NewAlbumModalPage', segment: 'new-album-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/new-band-event-modal/new-band-event-modal.module#NewBandEventModalPageModule', name: 'NewBandEventModalPage', segment: 'new-band-event-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/new-song-modal/new-song-modal.module#NewSongModalPageModule', name: 'NewSongModalPage', segment: 'new-song-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/new-band-member-modal/new-band-member-modal.module#NewBandMemberModalPageModule', name: 'NewBandMemberModalPage', segment: 'new-band-member-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/view-band-events/view-band-events.module#ViewBandEventsPageModule', name: 'ViewBandEventsPage', segment: 'view-band-events', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/view-band-members/view-band-members.module#ViewBandMembersPageModule', name: 'ViewBandMembersPage', segment: 'view-band-members', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/view-bands-by-fans/view-bands-by-fans.module#ViewBandsByFansPageModule', name: 'ViewBandsByFansPage', segment: 'view-bands-by-fans', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_40_angularfire2__["AngularFireModule"].initializeApp(__WEBPACK_IMPORTED_MODULE_44__environment_environment__["a" /* environment */].firebase),
                __WEBPACK_IMPORTED_MODULE_41_angularfire2_firestore__["AngularFirestoreModule"],
                __WEBPACK_IMPORTED_MODULE_43_angularfire2_auth__["AngularFireAuthModule"],
                __WEBPACK_IMPORTED_MODULE_42_angularfire2_storage__["AngularFireStorageModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_new_task_modal_new_task_modal__["a" /* NewTaskModalPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_details_details__["a" /* DetailsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_band_profile_band_profile__["a" /* BandProfilePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_create_band_member_create_band_member__["a" /* CreateBandMemberPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_new_band_member_modal_new_band_member_modal__["a" /* NewBandMemberModalPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_band_member_details_band_member_details__["a" /* BandMemberDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_create_band_event_create_band_event__["a" /* CreateBandEventPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_new_band_event_modal_new_band_event_modal__["a" /* NewBandEventModalPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_band_event_details_band_event_details__["a" /* BandEventDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_create_album_create_album__["a" /* CreateAlbumPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_album_details_album_details__["a" /* AlbumDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_new_album_modal_new_album_modal__["a" /* NewAlbumModalPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_band_view_album_band_view_album__["a" /* BandViewAlbumPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_new_song_modal_new_song_modal__["a" /* NewSongModalPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_edit_song_edit_song__["a" /* EditSongPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_edit_band_member_edit_band_member__["a" /* EditBandMemberPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_edit_band_event_edit_band_event__["a" /* EditBandEventPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_edit_album_edit_album__["a" /* EditAlbumPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_create_bands_by_fans_create_bands_by_fans__["a" /* CreateBandsByFansPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_view_bands_by_fans_view_bands_by_fans__["a" /* ViewBandsByFansPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_bands_by_fans_details_bands_by_fans_details__["a" /* BandsByFansDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_edit_bands_by_fans_edit_bands_by_fans__["a" /* EditBandsByFansPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_view_band_members_view_band_members__["a" /* ViewBandMembersPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_view_band_events_view_band_events__["a" /* ViewBandEventsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_38__pages_services_firebase_service__["a" /* FirebaseService */],
                __WEBPACK_IMPORTED_MODULE_39__pages_services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_image_picker__["a" /* ImagePicker */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environment_environment__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__ = __webpack_require__(141);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar) {
        var _this = this;
        platform.ready().then(function () {
            var unsubscribe = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().onAuthStateChanged(function (user) {
                if (user) {
                    //User is signed in.
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */];
                    unsubscribe();
                    console.log('User is signed in');
                }
                else {
                    //No user signed in.
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
                    unsubscribe();
                    console.log('User is NOT signed in');
                }
            });
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
        });
        __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.initializeApp(__WEBPACK_IMPORTED_MODULE_4__environment_environment__["a" /* environment */].firebase);
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/robertmartin/RadioWRXBetaTest1/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/robertmartin/RadioWRXBetaTest1/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, authService, formBuilder) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.errorMessage = '';
        this.validation_messages = {
            'email': [
                { type: 'required', message: 'Email is required.' },
                { type: 'pattern', message: 'Please enter a valid email.' }
            ],
            'password': [
                { type: 'required', message: 'Password is required.' },
                { type: 'minlength', message: 'Password must be at least 5 characters long.' }
            ]
        };
    }
    LoginPage.prototype.ionViewWillLoad = function () {
        this.validations_form = this.formBuilder.group({
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            password: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(5),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required
            ])),
        });
    };
    LoginPage.prototype.tryLogin = function (value) {
        var _this = this;
        this.authService.doLogin(value)
            .then(function (res) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
        }, function (err) {
            _this.errorMessage = err.message;
        });
    };
    LoginPage.prototype.goRegisterPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/robertmartin/RadioWRXBetaTest1/src/pages/login/login.html"*/'<ion-header>\n  <ion-navbar [hideBackButton]="true" color="primary">\n    <ion-title>Login</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="form-content">\n  <h1>Hello World!</h1>\n  <form class="form" [formGroup]="validations_form"  (ngSubmit)="tryLogin(validations_form.value)">\n\n    <ion-item>\n      <ion-label floating color="primary">Email</ion-label>\n      <ion-input type="text" formControlName="email"></ion-input>\n    </ion-item>\n    <div class="validation-errors">\n      <ng-container *ngFor="let validation of validation_messages.email">\n        <div class="error-message" *ngIf="validations_form.get(\'email\').hasError(validation.type) && (validations_form.get(\'email\').dirty || validations_form.get(\'email\').touched)">\n          {{ validation.message }}\n        </div>\n      </ng-container>\n    </div>\n\n    <ion-item>\n      <ion-label floating color="primary">Password</ion-label>\n      <ion-input type="password" formControlName="password" class="form-controll" required></ion-input>\n    </ion-item>\n    <div class="validation-errors">\n      <ng-container *ngFor="let validation of validation_messages.password">\n        <div class="error-message" *ngIf="validations_form.get(\'password\').hasError(validation.type) && (validations_form.get(\'password\').dirty || validations_form.get(\'password\').touched)">\n          {{ validation.message }}\n        </div>\n      </ng-container>\n    </div>\n\n    <button class="submit-btn" ion-button block type="submit" [disabled]="!validations_form.valid">Log In</button>\n    <label class="error-message">{{errorMessage}}</label>\n  </form>\n  <p class="go-to-register">\n    No account yet? <a (click)="goRegisterPage()">Create an account.</a>\n  </p>\n</ion-content>\n'/*ion-inline-end:"/Users/robertmartin/RadioWRXBetaTest1/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

},[327]);
//# sourceMappingURL=main.js.map