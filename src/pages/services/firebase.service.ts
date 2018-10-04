import { Injectable } from "@angular/core";
import 'rxjs/add/operator/toPromise';
import { AngularFirestore } from 'angularfire2/firestore';
import * as firebase from 'firebase/app';
import 'firebase/storage';

@Injectable()
export class FirebaseService {

  docId: string;

  private snapshotChangesSubscription: any;
  constructor(public afs: AngularFirestore){}

  //Allow user to retrieve tasks.
  getTasks(){
    return new Promise<any>((resolve, reject) => {
      let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('people').doc(currentUser.uid).collection('tasks').snapshotChanges()
      .subscribe(snapshots => {
        resolve(snapshots);
      })
    });
  }

  //Unsubsribe user after logout.
  unsubscribeOnLogOut(){
    //remember to unsubscribe from the snapshotChanges
    // debugger;
    this.snapshotChangesSubscription.unsubscribe();
  }

  //This section of code deals with the CRUD of tasks.

  //Allow user to update a task.
  updateTask(taskKey, value){
    return new Promise<any>((resolve, reject) => {
      let currentUser = firebase.auth().currentUser;
      this.afs.collection('people').doc(currentUser.uid).collection('tasks').doc(taskKey).set(value)
      .then(
        res => resolve(res),
        err => reject(err)
      )
    })
  }

  //Allow user to delete a task.
  deleteTask(taskKey){
    return new Promise<any>((resolve, reject) => {
      let currentUser = firebase.auth().currentUser;
      this.afs.collection('people').doc(currentUser.uid).collection('tasks').doc(taskKey).delete()
      .then(
        res => resolve(res),
        err => reject(err)
      )
    })
  }

  //Allow user to creat a task.
  createTask(value){
    return new Promise<any>((resolve, reject) => {
      let currentUser = firebase.auth().currentUser;
      this.afs.collection('people').doc(currentUser.uid).collection('tasks').add({
        title: value.title,
        description: value.description,
        image: value.image
      })
      .then(
        res => resolve(res),
        err => reject(err)
      )
    })
  }

  //This section of code deals with the CRUD of Members.

  //Allow user to delete a task.
  deleteMember(memberKey){
    return new Promise<any>((resolve, reject) => {
      let currentUser = firebase.auth().currentUser;
      this.docId = localStorage.getItem('id');
      this.afs.collection('band').doc(currentUser.uid).collection('members').doc(this.docId).delete()
      .then(
        res => resolve(res),
        err => reject(err)
      )
    })
  }

  //Allow user to get Band Members.
  getMembers(){
    return new Promise<any>((resolve, reject) => {
      let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('band').doc(currentUser.uid).collection('members').snapshotChanges()
      .subscribe(snapshots => {
        resolve(snapshots);
      })
    });
  }

  //Alllow user to update Band Members.
  updateMember(memberKey, value){
    return new Promise<any>((resolve, reject) => {
      this.docId = localStorage.getItem('id');
      let currentUser = firebase.auth().currentUser;
      this.afs.collection('band').doc(currentUser.uid).collection('members').doc(this.docId).set(value)
      .then(
        res => resolve(res),
        err => reject(err)
      )
    })
  }

  //Allow user to create a Band Member.
  createMember(value){
    return new Promise<any>((resolve, reject) => {
      let currentUser = firebase.auth().currentUser;
      this.afs.collection('band').doc(currentUser.uid).collection('members').add({
        name: value.name,
        biography: value.biography,
        image: value.image,
        instrument: value.instrument,
        dob: value.dob
      })
      .then(
        res => resolve(res),
        err => reject(err)
      )
    })
  }

  //This section of code deals with the CRUD of Events.

  //Allow user to get Band Events.
  getEvents(){
    return new Promise<any>((resolve, reject) => {
      let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('band').doc(currentUser.uid).collection('events').snapshotChanges()
      .subscribe(snapshots => {
        resolve(snapshots);
      })
    });
  }

  //Allow user to create a Band Event.
  createEvent(value){
    return new Promise<any>((resolve, reject) => {
      let currentUser = firebase.auth().currentUser;
      this.afs.collection('band').doc(currentUser.uid).collection('events').add({
        title: value.title,
        description: value.description,
        image: value.image
      })
      .then(
        res => resolve(res),
        err => reject(err)
      )
    })
  }

  //Allow user to delete an event.
  deleteEvent(eventKey){
    return new Promise<any>((resolve, reject) => {
      this.docId = localStorage.getItem('id');
      let currentUser = firebase.auth().currentUser;
      this.afs.collection('band').doc(currentUser.uid).collection('events').doc(this.docId).delete()
      .then(
        res => resolve(res),
        err => reject(err)
      )
    })
  }

  //Alllow user to update Events.
  updateEvent(eventKey, value){
    return new Promise<any>((resolve, reject) => {
      this.docId = localStorage.getItem('id');
      let currentUser = firebase.auth().currentUser;
      this.afs.collection('band').doc(currentUser.uid).collection('events').doc(this.docId).set(value)
      .then(
        res => resolve(res),
        err => reject(err)
      )
    })
  }

  //Allow user to get Albums
  getAlbums(){
    return new Promise<any>((resolve, reject) => {
      let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('band').doc(currentUser.uid).collection('albums').snapshotChanges()
      .subscribe(snapshots => {
        resolve(snapshots);
      })
    });
  }

  //Allow user to create an Album.
  createAlbum(value){
    return new Promise<any>((resolve, reject) => {
      let currentUser = firebase.auth().currentUser;
      this.afs.collection('band').doc(currentUser.uid).collection('albums').add({
        title: value.title,
        description: value.description,
        image: value.image
      })
      .then(
        res => resolve(res),
        err => reject(err)
      )
    })
  }

  //Allow user to delete an album.
  deleteAlbum(docId){
    return new Promise<any>((resolve, reject) => {
      this.docId = localStorage.getItem('id');
      let currentUser = firebase.auth().currentUser;
      this.afs.collection('band').doc(currentUser.uid).collection('albums').doc(this.docId).delete()
      .then(
        res => resolve(res),
        err => reject(err)
      )
    })
  }

  //Alllow user to update Album.
  updateAlbum(albumKey, value){
    return new Promise<any>((resolve, reject) => {
      this.docId = localStorage.getItem('id');
      let currentUser = firebase.auth().currentUser;
      this.afs.collection('band').doc(currentUser.uid).collection('albums').doc(this.docId).set(value)
      .then(
        res => resolve(res),
        err => reject(err)
      )
    })
  }

  //Allow user to get songs
  getSongs(){
    return new Promise<any>((resolve, reject) => {
      this.docId = localStorage.getItem('id');
      let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('band').doc(currentUser.uid).collection('albums').doc(this.docId).collection('songs').snapshotChanges()
      .subscribe(snapshots => {
        resolve(snapshots);
      })
    });
  }

  //Allow user to creat append a song to an album.
  createSong(value){
    return new Promise<any>((resolve, reject) => {
      let currentUser = firebase.auth().currentUser;
      this.docId = localStorage.getItem('id');
      this.afs.collection('band').doc(currentUser.uid).collection('albums').doc(this.docId).collection('songs').add({
        title: value.title,
        description: value.description,
        //image: value.image,
        //id: value.id
      })
      .then(
        res => resolve(res),
        err => reject(err)
      )
    })
  }

  //Allow user to delete an album.
  deleteSong(songKey){
    return new Promise<any>((resolve, reject) => {
      let currentUser = firebase.auth().currentUser;
      this.docId = localStorage.getItem('id');
      this.afs.collection('band').doc(currentUser.uid).collection('albums').doc(this.docId).collection('songs').doc(songKey).delete()
      .then(
        res => resolve(res),
        err => reject(err)
      )
    })
  }

  //Alllow user to update Songs.
  updateSong(songKey, value){
    return new Promise<any>((resolve, reject) => {
      let currentUser = firebase.auth().currentUser;
      this.docId = localStorage.getItem('id')
      this.afs.collection('band').doc(currentUser.uid).collection('albums').doc(this.docId).collection('songs').doc(songKey).set(value)
      .then(
        res => resolve(res),
        err => reject(err)
      )
    })
  }

  //Allow user to get Band Events.
  getBandsByFans(){
    return new Promise<any>((resolve, reject) => {
      let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('band').doc(currentUser.uid).collection('bandsbyfans').snapshotChanges()
      .subscribe(snapshots => {
        resolve(snapshots);
      })
    });
  }

  //Allow user to create Bands By Fans instance.
  createBandsByFans(value){
    return new Promise<any>((resolve, reject) => {
      let currentUser = firebase.auth().currentUser;
      //this.docId = localStorage.getItem('id');
      this.afs.collection('band').doc(currentUser.uid).collection('bandsbyfans').add({
        title: value.title,
        description: value.description,
        image: value.image
        //id: value.id
      })
      .then(
        res => resolve(res),
        err => reject(err)
      )
    })
  }

  //Allow user to delete an album.
  deleteBandsByFans(docId){
    return new Promise<any>((resolve, reject) => {
      this.docId = localStorage.getItem('id');
      let currentUser = firebase.auth().currentUser;
      this.afs.collection('band').doc(currentUser.uid).collection('bandsbyfans').doc(this.docId).delete()
      .then(
        res => resolve(res),
        err => reject(err)
      )
    })
  }

  //Alllow user to update Album.
  updateBandsByFans(albumKey, value){
    return new Promise<any>((resolve, reject) => {
      this.docId = localStorage.getItem('id');
      let currentUser = firebase.auth().currentUser;
      this.afs.collection('band').doc(currentUser.uid).collection('bandsbyfans').doc(this.docId).set(value)
      .then(
        res => resolve(res),
        err => reject(err)
      )
    })
  }

  //This section of code deals with the ImagePicker upload. FIX!!!

  //Allow user to pick an image. FIX!!! ImagePicker not currentl working properly
  //but default images are storing in Firebase Database.
  encodeImageUri(imageUri, callback) {
    var c = document.createElement('canvas');
    var ctx = c.getContext("2d");
    var img = new Image();
    img.onload = function () {
      var aux:any = this;
      c.width = aux.width;
      c.height = aux.height;
      ctx.drawImage(img, 0, 0);
      var dataURL = c.toDataURL("image/jpeg");
      callback(dataURL);
    };
    img.src = imageUri;
  };

  uploadImage(imageURI, randomId){
    return new Promise<any>((resolve, reject) => {
      let storageRef = firebase.storage().ref();
      let imageRef = storageRef.child('image').child(randomId);
      this.encodeImageUri(imageURI, function(image64){
        imageRef.putString(image64, 'data_url')
        .then(snapshot => {
          snapshot.ref.getDownloadURL()
          .then(res => resolve(res))
        }, err => {
          reject(err);
        })
      })
    })
  }
}
