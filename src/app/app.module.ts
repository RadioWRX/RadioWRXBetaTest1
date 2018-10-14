import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { ImagePicker } from '@ionic-native/image-picker';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { MenuPage } from '../pages/menu/menu';
import { BandProfilePage } from '../pages/band-profile/band-profile';
import { TabsPage } from '../pages/tabs/tabs';
import { DetailsPage } from '../pages/details/details';
import { NewTaskModalPage } from '../pages/new-task-modal/new-task-modal';
import { CreateBandMemberPage } from '../pages/create-band-member/create-band-member';
import { CreateBandEventPage } from '../pages/create-band-event/create-band-event';
import { NewBandMemberModalPage } from '../pages/new-band-member-modal/new-band-member-modal';
import { NewBandEventModalPage } from '../pages/new-band-event-modal/new-band-event-modal';
import { BandMemberDetailsPage } from '../pages/band-member-details/band-member-details';
import { BandEventDetailsPage } from '../pages/band-event-details/band-event-details';
import { CreateAlbumPage } from '../pages/create-album/create-album';
import { AlbumDetailsPage } from '../pages/album-details/album-details';
import { NewAlbumModalPage } from '../pages/new-album-modal/new-album-modal';
import { BandViewAlbumPage } from '../pages/band-view-album/band-view-album';
import { NewSongModalPage } from '../pages/new-song-modal/new-song-modal';
import { EditSongPage } from '../pages/edit-song/edit-song';
import { EditBandMemberPage } from '../pages/edit-band-member/edit-band-member';
import { EditBandEventPage } from '../pages/edit-band-event/edit-band-event';
import { EditAlbumPage } from '../pages/edit-album/edit-album';
import { CreateBandsByFansPage } from '../pages/create-bands-by-fans/create-bands-by-fans';
import { ViewBandsByFansPage } from '../pages/view-bands-by-fans/view-bands-by-fans';
import { BandsByFansDetailsPage } from '../pages/bands-by-fans-details/bands-by-fans-details';
import { EditBandsByFansPage } from '../pages/edit-bands-by-fans/edit-bands-by-fans';
import { ViewBandMembersPage } from '../pages/view-band-members/view-band-members';
import { ViewBandEventsPage } from '../pages/view-band-events/view-band-events';
import { AddAlbumPage } from '../pages/add-album/add-album';
import { AddSongPage } from '../pages/add-song/add-song';

import { FirebaseService } from '../pages/services/firebase.service';
import { AuthService } from '../pages/services/auth.service';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environment/environment';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    RegisterPage,
    MenuPage,
    NewTaskModalPage,
    DetailsPage,
    TabsPage,
    AboutPage,
    ContactPage,
    HomePage,
    BandProfilePage,
    CreateBandMemberPage,
    NewBandMemberModalPage,
    BandMemberDetailsPage,
    CreateBandEventPage,
    NewBandEventModalPage,
    BandEventDetailsPage,
    CreateAlbumPage,
    AlbumDetailsPage,
    NewAlbumModalPage,
    BandViewAlbumPage,
    NewSongModalPage,
    EditSongPage,
    EditBandMemberPage,
    EditBandEventPage,
    EditAlbumPage,
    CreateBandsByFansPage,
    ViewBandsByFansPage,
    BandsByFansDetailsPage,
    EditBandsByFansPage,
    ViewBandMembersPage,
    ViewBandEventsPage,
    AddAlbumPage,
    AddSongPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    RegisterPage,
    MenuPage,
    NewTaskModalPage,
    DetailsPage,
    TabsPage,
    AboutPage,
    ContactPage,
    HomePage,
    BandProfilePage,
    CreateBandMemberPage,
    NewBandMemberModalPage,
    BandMemberDetailsPage,
    CreateBandEventPage,
    NewBandEventModalPage,
    BandEventDetailsPage,
    CreateAlbumPage,
    AlbumDetailsPage,
    NewAlbumModalPage,
    BandViewAlbumPage,
    NewSongModalPage,
    EditSongPage,
    EditBandMemberPage,
    EditBandEventPage,
    EditAlbumPage,
    CreateBandsByFansPage,
    ViewBandsByFansPage,
    BandsByFansDetailsPage,
    EditBandsByFansPage,
    ViewBandMembersPage,
    ViewBandEventsPage,
    AddAlbumPage,
    AddSongPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FirebaseService,
    AuthService,
    ImagePicker,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
