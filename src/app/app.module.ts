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
import { NewBandMemberModalPage } from '../pages/new-band-member-modal/new-band-member-modal';
import { BandMemberDetailsPage } from '../pages/band-member-details/band-member-details';

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
    BandMemberDetailsPage
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
    BandMemberDetailsPage
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
