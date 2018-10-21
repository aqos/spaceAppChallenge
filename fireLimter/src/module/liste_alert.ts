import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';


export class AccueilPageModule {

   static liste_alerte:Array < {
        photo:any,
        message:any
        datee:any,
        ville:any
      }> = [];

      constructor()
      {
        var date = new  Date();
        let h=new Date().getHours();
        let m=new Date().getMinutes();
        let d=new Date().getDay();
        let moi=new Date().getMonth();
        let anne=new Date().getFullYear();
        let str=d+"/"+moi+"/"+anne+" à "+h+":"+m;

        console.log(str);
        let alerte:any=
          {
              photo:"assets/holder_incen.jpg",
              message:"un feu est vers la foret",
              datee:str,
              ville:"Calavi"
          }
          AccueilPageModule.liste_alerte.push(alerte)
      }

      addAlerte(photo:any, message:any,date:any, ville:any)
      {
          let alerte:any=
          {
              photo:photo,
              message:message,
              datee:date,
              ville:ville
          }
          AccueilPageModule.liste_alerte.push(alerte)
      }

      getAlerte():{photo:any,
        message:any
        datee:any,ville:any}[]
      {
          return AccueilPageModule.liste_alerte;
      }

}
