import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController} from 'ionic-angular';
import { ModalPage } from "../modal/modal";

/**
 * Generated class for the AjustesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-ajustes',
  templateUrl: 'ajustes.html',
})
export class AjustesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  volverTabInicio(){ //Esta funcion se diferencia de las otras maneras de pegar saltos en que tambien nos moveremos en el tab
    this.navCtrl.parent.select(0);

  }

  mostrarModal(){
    console.log("Mostrando el modal");
    let modal = this.modalCtrl.create(ModalPage,{ nombre: "Aitor", edad: 21 });
    modal.present();
    modal.onDidDismiss(parametros => {
      console.log(parametros);
    });
  }


}
