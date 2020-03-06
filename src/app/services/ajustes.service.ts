import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class AjustesService {

  loading: any;

  constructor(private loadingCtrl: LoadingController) { }

  async presentLoading(mensaje: string, segundos: number = 3) {
    let duracion = 1000 * segundos;
    this.loading = await this.loadingCtrl.create({
      message: mensaje,
      duration: duracion
    });
    await this.loading.present();
  }
}
