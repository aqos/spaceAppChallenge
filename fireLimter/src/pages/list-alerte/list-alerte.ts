import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AccueilPageModule} from '../../module/liste_alert';
import { moduleDef } from '@angular/core/src/view';
import { PopoverController } from 'ionic-angular';
import { InfoAlertePage } from '../info-alerte/info-alerte';
/**
 * Generated class for the ListAlertePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-alerte',
  templateUrl: 'list-alerte.html',
})
export class ListAlertePage {

  alerts:Array < {
    photo:any,
    message:any
    datee:any,
    ville:any
  }> ;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public popoverCtrl: PopoverController
    
     ) {

      let al=new AccueilPageModule();
      this.alerts=AccueilPageModule.liste_alerte;

      console.log(this.alerts);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListAlertePage');
  }

  getInfo(alert:{photo:any, message:any, datee:any, ville:any})
  {
    const popover = this.popoverCtrl.create(InfoAlertePage, {ville:alert.ville, photo:alert.photo, message:alert.message, date:alert.datee });
    
      popover.present();
    
  }

}
