import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-asigate-matery',
  templateUrl: './student-asigate-matery.component.html',
  styleUrls: ['./student-asigate-matery.component.css']
})
export class StudentAsigateMateryComponent implements OnInit {
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

}
