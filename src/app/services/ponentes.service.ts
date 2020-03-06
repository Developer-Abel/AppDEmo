import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../config/url.servicios';
import { HttpClient } from '@angular/common/http';
import { Iponentes, Iponente } from '../interfaces/ponentes';
import { AjustesService } from './ajustes.service';



@Injectable({
  providedIn: 'root'
})
export class PonentesService {

  ponentes: Iponente[];
  pagina: number = 0;


  constructor( private http: HttpClient, private _as: AjustesService) { }


  async cargar_todos() {
    // this._as.presentLoading("Cargando...",1);
    let url = URL_SERVICIOS + "/profesores.php?todos&pagina=" + this.pagina;
    let promesa = await this.http.get<Iponentes>(url)
      .toPromise()
      .then(data => {
        this.ponentes = data.profesores;
        this.pagina = this.pagina += 1;
        this._as.loading.dismiss();
        return data;
      })
      .catch(error => {
        this._as.loading.dismiss();
        return Promise.reject(error);
      });
    return promesa;
}
}



