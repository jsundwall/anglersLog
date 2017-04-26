import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

import {Http} from '@angular/http';
import { Storage } from '@ionic/storage';


import { SimpleCatch } from '../../models/catch';
import { Weather } from '../../models/weatherModel';
import { Settings } from '../../models/settings';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  public getLon:number;
  public getLat:number;
  public currentWeather:string;


  public settings:Settings = new Settings();
  public test:Weather = new Weather();
  public currentCatch:SimpleCatch = new SimpleCatch();
  public catches:Array<SimpleCatch> = new Array<SimpleCatch>();

  constructor(public navCtrl: NavController, public navParams: NavParams, public http:Http, public geolocation: Geolocation, public storage: Storage) {
    this.settings = new Settings();
    this.storage.get('angler_name').then((val) => {
      this.settings.angler_name = val;
    });
    this.storage.get('datetime').then((val) => {
      this.settings.datetime = val;
    });
    this.storage.get('breed').then((val) => {
      this.settings.breed = val;
    });
    this.storage.get('length').then((val) => {
      this.settings.length = val;
    });
    this.storage.get('weight').then((val) => {
      this.settings.weight = val;
    });
    this.storage.get('weather').then((val) => {
      this.settings.weather = val;
    });
    this.storage.get('location').then((val) => {
      this.settings.location = val;
    });
    this.storage.get('latitude').then((val) => {
      this.settings.latitude = val;
    });
    this.storage.get('longitude').then((val) => {
      this.settings.longitude = val;
    });

    this.geolocation.getCurrentPosition().then((position) => {
      this.getLon = position.coords.longitude;
      this.getLat = position.coords.latitude;
    });

    http.get("api/catches")
    .subscribe(
      data => this.catches = data.json().catches);

    http.get("weather/weather?lat=" + Math.round(this.getLat) + "&lon=" + Math.round(this.getLon) + "&appid=55e30fa8072916934512918dac4527d2")
      .subscribe(
        data => this.currentWeather = data.json().weather["0"].description);
    }

    public addCatch()
    {

      this.currentCatch.latitude =  this.getLat;
      this.currentCatch.longitude = this.getLon;
      this.currentCatch.datetime = "2017-04-03 9:00:00";
      this.currentCatch.weather = this.currentWeather
      alert(JSON.stringify(this.currentCatch));
      this.http.post("api/catches", JSON.stringify(this.currentCatch))
      .subscribe(
        (val) => { alert("data succesfully send! " + val.text())},
        (err) => { alert("No data received! " + err ) },
        ()    => { alert("task completed?") }
      )

    }
}
