import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { Settings } from '../../models/settings';
import { HomePage } from '../home/home';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  public settings:Settings = new Settings();

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage)
  {
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

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  setData(){
    console.log(this.settings.angler_name);
    this.storage.set('angler_name',this.settings.angler_name);
    this.storage.set('datetime',this.settings.datetime);
    this.storage.set('breed',this.settings.breed);
    this.storage.set('length',this.settings.length);
    this.storage.set('weight',this.settings.weight);
    this.storage.set('weather',this.settings.weather);
    this.storage.set('location',this.settings.location);
    this.storage.set('latitude',this.settings.latitude);
    this.storage.set('longitude',this.settings.longitude);
    console.log(this.settings.angler_name)

    // this.navCtrl.push(HomePage, {
    //     angler_name: this.settings.angler_name
    // });
  }

}
