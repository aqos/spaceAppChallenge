import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Geolocation } from '@ionic-native/geolocation';

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
  photo:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private camera: Camera,private geolocation: Geolocation) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlertePage');
  }

  cam()
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

}
