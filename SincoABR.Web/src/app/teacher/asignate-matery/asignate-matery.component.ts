import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asignate-matery',
  templateUrl: './asignate-matery.component.html',
  styleUrls: ['./asignate-matery.component.css']
})
export class AsignateMateryComponent implements OnInit {
  messageNotif = '';

  typesOfShoes = [
    'Matemáticas',
    'Español',
    'Aritmética',
    'Física',
    'Ed. Física',
    'Etica',
    'Química'
  ];
  constructor() { }

  ngOnInit() {
  }

  notification() {
    this.messageNotif = 'La información se ha guardado.';
  }

}
