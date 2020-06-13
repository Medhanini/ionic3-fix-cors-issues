import { Component } from '@angular/core';
import { NavController, LoadingController, Platform } from 'ionic-angular';

import { HttpClient } from '@angular/common/http'
import { HTTP } from '@ionic-native/http/ngx'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private http : HttpClient, private nativeHttp:HTTP ,private plt : Platform, private loadingCtrl:LoadingController ,public navCtrl: NavController) {

  }
  getdataStandard(){

  }
  getdatanative(){

  }
  getdataevrywhere(){

  }
}
