import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LameteoPage } from '../lameteo/lameteo';
import { AlertePage } from '../alerte/alerte';
import { ListAlertePage } from '../list-alerte/list-alerte';
import { InfoPage } from '../info/info';

/**
 * Generated class for the AccueilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-accueil',
  templateUrl: 'accueil.html',
})
export class AccueilPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccueilPage');
  }

  liste_alert()
  {
    this.pr("liste alert");
    this.navCtrl.push(ListAlertePage);
  }
  metheo()
  {
    this.pr("metheo");
    this.navCtrl.push(LameteoPage);
  }
  conf()
  {
    this.pr("config")
  }
  info()
  {
    this.pr("info");
    this.navCtrl.push(InfoPage);
  }
  alerte()
  {
    this.navCtrl.push(AlertePage);
  }
  
  pr(message:String)
  {
    console.log(message);
  }

}
