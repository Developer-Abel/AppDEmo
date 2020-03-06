import { Component, OnInit } from '@angular/core';
import { Iusuario, Iusuarios } from '../../interfaces/list';



@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  usuarios: Iusuario[];

  constructor() { }

  ngOnInit() {

}
}
