import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InfoAlertePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info-alerte',
  templateUrl: 'info-alerte.html',
})
export class InfoAlertePage {

  ville:any="";
  photo:any="";
  date:any="";
  message:any="";

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.ville=navParams.get('ville');
    this.photo=navParams.get('photo');
    this.date=navParams.get('date');
    this.message=navParams.get('message');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoAlertePage');
  }

}
