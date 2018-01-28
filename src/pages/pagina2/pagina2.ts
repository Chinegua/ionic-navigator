import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Pagina3Page } from "../pagina3/pagina3";
import { PageTransition } from 'ionic-angular/transitions/page-transition';
/**
 * Generated class for the Pagina2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-pagina2',
  templateUrl: 'pagina2.html',
})
export class Pagina2Page {

  pagina3:any = Pagina3Page;
  personajes:any[] = [
    {
      nombre:"Yoda",
      color: "verde"
    },
    {
      nombre:"Kylo Ren",
      color:"rojo"
    },
    {
      nombre:"Mace Windu",
      color:"morado"
    },
    {
      nombre:"Rey",
      color:"azul"
    }
  ];

  constructor(public navCtrl: NavController) {
  }

  irPagina3(personaje){
    console.log(personaje);
    this.navCtrl.push( Pagina3Page, { 'personaje':personaje } );
  }

}
