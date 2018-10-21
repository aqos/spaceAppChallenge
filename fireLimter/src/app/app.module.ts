import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';

import { Camera } from '@ionic-native/camera';
import { Geolocation } from '@ionic-native/geolocation';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {TabsPage} from '../pages/tabs/tabs';
import {ConnexionPage} from '../pages/connexion/connexion';
import { WelcomePage } from '../pages/welcome/welcome';
import { InscriptionPage } from '../pages/inscription/inscription';
import { AccueilPage } from '../pages/accueil/accueil';
import { MetheoProvider } from '../providers/metheo/metheo';
import { LameteoPage } from '../pages/lameteo/lameteo';
import { AlertePage } from '../pages/alerte/alerte';
import { ListAlertePage } from '../pages/list-alerte/list-alerte';
import { InfoPage } from '../pages/info/info';
import { CameraProvider } from '../providers/camera/camera';
import { AccueilPageModule } from '../pages/accueil/accueil.module';
import { InfoAlertePage } from '../pages/info-alerte/info-alerte';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    ConnexionPage,
    WelcomePage,
    AccueilPage,
    InscriptionPage,
    LameteoPage,
    AlertePage,
    ListAlertePage,
    InfoPage,
    InfoAlertePage
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    ConnexionPage,
    WelcomePage,
    AccueilPage,
    InscriptionPage,
    LameteoPage,
    AlertePage,
    ListAlertePage,
    InfoPage,
    InfoAlertePage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MetheoProvider,
    CameraProvider
  ]
})
export class AppModule {}
