import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Geolocation } from '@ionic-native/geolocation';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  photo:any;
  lat:any;
  long:any;
  constructor(public navCtrl: NavController, private camera: Camera,private geolocation: Geolocation) {

    

  }

  tabs()
  {
    this.navCtrl.push(TabsPage);
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

  
  geo()
  {
    this.geolocation.getCurrentPosition().then((resp) => {
       this.lat=resp.coords.latitude;
       this.long=resp.coords.longitude;
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

}