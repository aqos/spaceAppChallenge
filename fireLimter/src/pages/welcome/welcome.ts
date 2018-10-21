import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConnexionPage } from '../connexion/connexion';
import { InscriptionPage } from '../inscription/inscription';

/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

  recup_mdp()
  {
    console.log("recup mdp");
  }

  ins()
  {
    this.navCtrl.push(ConnexionPage);
  }
  con()
  {
    this.navCtrl.push(InscriptionPage);
  }

}
