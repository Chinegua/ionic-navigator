import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Pagina3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-pagina3',
  templateUrl: 'pagina3.html',
})
export class Pagina3Page {

  personajes:any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(navParams);
    this.personajes = this.navParams.data.personaje;
  }



}
