import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MetheoProvider} from '../../providers/metheo/metheo';
/**
 * Generated class for the LameteoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lameteo',
  templateUrl: 'lameteo.html',
})
export class LameteoPage {
  retour:any;
    
  weatherData = {
    icon: '',
    main: '',
    city: '',
    description: '',
    temp: ''
    };;
  state:boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams, public data : MetheoProvider,) {

    this.data.getMeteo("cotonou")
    .subscribe(
      (data:any)=>{
      this.retour=data;
    },
    (error:any)=>{
      //this.tools.loading.dismiss();
      //this.tools.sendAlert("Veuillez vérifer votre connexion internet.");
      console.log("erreur");
      console.log(error);
    },
    ()=>{

     // this.tools.loading.dismiss();
     console.log("bonne reception de donnee")

          console.log(this.retour);
          
    }
  );

}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LameteoPage');
  }

}
