import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the MetheoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MetheoProvider {

    apikey:any="Ngqkji4G5dgHPKv3AcRl1ydKVm1RDnSj";
    city:any="cotonou";
    url_location_info:any="http://dataservice.accuweather.com/locations/v1/cities/search/";

    searchUrl: 'http://api.openweathermap.org/data/2.5/weather?q=';
    units: '&units=metric';
    appid: '&appid=3f9a778bc7d7992c468de5cfa6bafaf3';
    imgUrl: 'http://openweathermap.org/img/w/' 

  constructor(public http: HttpClient) {
    console.log('Hello MetheoProvider Provider');
  }

  
  getMeteo(ville:any)
  {
    //  this.http.get(this.url_location_info+"?apikey="+this.apikey+"?q="+this.city)
    // .map(res =>
    //   {
    //     console.log(res);
    //   });

    return this.http.get("http://api.openweathermap.org/data/2.5/weather?q="+ville+"&units=metric&appid=3f9a778bc7d7992c468de5cfa6bafaf3");
    
  }

}
