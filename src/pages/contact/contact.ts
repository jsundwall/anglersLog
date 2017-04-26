import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})


export class ContactPage {

  public getLon:number;
  public getLat:number;

  constructor(public navCtrl: NavController, public geolocation: Geolocation) {}

  getCoord(){

    this.geolocation.getCurrentPosition().then((position) => {

      this.getLon = position.coords.longitude;
      this.getLat = position.coords.latitude;

      console.log(this.getLat);
      console.log(this.getLon);
    });
  }

}
