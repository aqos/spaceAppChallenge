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
    temp: '',
    pressure:'',
    humidity:'',
    vent:{speed : '', deg:''}

    };
    ville:any="";
    urlImg :any= 'http://openweathermap.org/img/w/';
  state:boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams, public data : MetheoProvider,) {

    

}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LameteoPage');
    this.ville="cotonou";
    this.getMeteo();
  }

  getMeteo()
  {
    this.data.getMeteo(this.ville)
    .subscribe(
      (data:any)=>{
      this.retour=data;
    },
    (error:any)=>{
      //this.tools.loading.dismiss();
      //this.tools.sendAlert("Veuillez vérifer votre connexion internet.");
      console.log("erreur");
      console.log(error);
      this.state=false;
    },
    ()=>{

     // this.tools.loading.dismiss();
     console.log("bonne reception de donnee")

          console.log(this.retour);
          this.weatherData.icon=this.urlImg+this.retour.weather[0].icon+".png";
          this.weatherData.main=this.retour.weather[0].main;
          this.weatherData.city=this.retour.name;
          this.weatherData.description=this.retour.weather[0].description;
          this.weatherData.temp=this.retour.main.temp;
          this.weatherData.humidity=this.retour.main.humidity;
          this.weatherData.pressure=this.retour.main.pressure;
          this.weatherData.vent.deg=this.retour.wind.deg;
          this.weatherData.vent.speed=this.retour.wind.speed;




          this.state=true;

          
    }
  );
  }

}
