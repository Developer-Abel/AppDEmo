import { Component, OnInit } from '@angular/core';
import { PonentesService } from '../../services/ponentes.service';


@Component({
  selector: 'app-ponentes',
  templateUrl: './ponentes.page.html',
  styleUrls: ['./ponentes.page.scss'],
})
export class PonentesPage implements OnInit {

  constructor(private _ps: PonentesService) { }

  ngOnInit() {
    this._ps.ponentes = [];
    this._ps.cargar_todos();
  }

}
