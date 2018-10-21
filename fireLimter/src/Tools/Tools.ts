import {  ToastController, LoadingController, AlertController} from 'ionic-angular';

export class Tools {

    
    loading: any;
    constructor(
        public toastCtrl  : ToastController,
        public loadingCtrl: LoadingController,
        public alertCtrl: AlertController,
    ) {
  
        
  
    }

    sendNotification(message : string)  : void
  {
     let notification = this.toastCtrl.create({
         message       : message,
         duration      : 3000
     });
     notification.present();
  }
  presentLoading() {
 
    this.loading = this.loadingCtrl.create({
        content: 'Patientez un instant....'
    });
 
    this.loading.present();
  }  

  sendAlert(message:string) {
    let alert = this.alertCtrl.create({
      title: 'Notification',
      subTitle: message,
      buttons: 
      [
        {
            text: 'OK',
            handler: () => 
            {
              
            }
        }
      ]
    });
    alert.present();
  }



}