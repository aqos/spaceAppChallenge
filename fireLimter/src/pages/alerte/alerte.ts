import { Component, ViewContainerRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Geolocation } from '@ionic-native/geolocation';
import {Tools} from '../../Tools/Tools'
import {  ToastController, LoadingController, AlertController,Events} from 'ionic-angular';
import { CameraProvider } from '../../providers/camera/camera';
import {AccueilPageModule} from '../../module/liste_alert';
import { AccueilPage } from '../accueil/accueil';


/**
 * Generated class for the AlertePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-alerte',
  templateUrl: 'alerte.html',
})
export class AlertePage {
  tools:Tools;
  chosenPicture: any;
  message:any="";
  holder_image="assets/holder_incen.jpg";
  photo:any;
  ville:any="Cotonou";
  cert:boolean=false;
  locat=
  {long:8,lat:7};
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private camera: Camera,private geolocation: Geolocation,
    public toastCtrl  : ToastController,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public cameraProvider: CameraProvider,
    ) {
      this.tools=new Tools(this.toastCtrl, this.loadingCtrl, this.alertCtrl);
      this.chosenPicture=this.holder_image;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlertePage');
  }
  verif(data:any)
  {
    //const loading = this.loadingCtrl.create();

    let res=this.cameraProvider.attenteValidation();
    if(res=true)
    {
      
    }
    
    this.navCtrl.push(AccueilPage);

  }
  send()
  {
    this.geo();

    this.tools.sendAlert("Alerte incendie envoyé!! Nous procédons à la vérification par satelite.Nous vous remercions pour votre participation");
    var date = new  Date();
    let h=new Date().getHours();
    let m=new Date().getMinutes();
    let d=new Date().getDay();
    let moi=new Date().getMonth();
    let anne=new Date().getFullYear();
    let str=d+"/"+moi+"/"+anne+" à "+h+":"+m;


    let alert= 
    {
      photo:this.chosenPicture,
      datee:str,
      message:this.message,
      ville:this.ville
    }
    AccueilPageModule.liste_alerte.push(alert)
    this.verif("");



  }
  geo()
  {
    this.geolocation.getCurrentPosition().then((resp) => {
       this.locat.lat=resp.coords.latitude;
       this.locat.long=resp.coords.longitude;

       console.log(this.locat.lat+"---"+this.locat.long);

     }).catch((error) => {
       console.log('Error getting location');
       console.log(error);
     });
     
     let watch = this.geolocation.watchPosition();
     watch.subscribe((data) => {
      // data can be a set of coordinates, or an error (if an error occurred).
      // data.coords.latitude
      // data.coords.longitude
     });
  }
  takePicture()
  {
    const options: CameraOptions = {
      quality: 70,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.PNG,
      mediaType: this.camera.MediaType.PICTURE,
      saveToPhotoAlbum:true
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
       this.photo = 'data:image/png;base64,' + imageData;
       console.log("nous somme ici")
       console.log(this.photo);
       console.log("__________");
     }, (err) => {

      console.log("error");

      // Handle error
     });
  }

  cam() {
    const loading = this.loadingCtrl.create();

    loading.present();
    return this.cameraProvider.getPictureFromCamera().then(picture => {
      if (picture) {
        this.chosenPicture = picture;
        console.log(this.chosenPicture);
      }
      loading.dismiss();
    }, error => {
      alert(error);
    });
  }

}
