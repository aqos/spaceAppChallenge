import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {ConnexionPage} from '../pages/connexion/connexion';

import { HomePage } from '../pages/home/home';
import { WelcomePage } from '../pages/welcome/welcome';
import { AccueilPage } from '../pages/accueil/accueil';
import { ListAlertePage } from '../pages/list-alerte/list-alerte';
import { InfoPage } from '../pages/info/info';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = WelcomePage;
  general: Array < {
    title: string,
    component: any,
    hidden: boolean,
    icon: string,
    isgain: boolean
  } > ;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {


    this.general = [{
      
        title: "Déconnexion",
        component: ConnexionPage,
        hidden: false,
        icon: 'log-out',
        isgain: false,
    }]


    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

