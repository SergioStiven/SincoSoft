import { Component } from '@angular/core';
import {MatTableDataSource} from '@angular/material';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  lastname: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Sergio Stiven', lastname: 'Gil Silva', weight: 1, symbol: 'Mañana'},
  {position: 2, name: 'Guillemo', lastname: 'Ruiz Gomez', weight: 4, symbol: 'Tarde'},
  {position: 3, name: 'Rayan', lastname: 'Iglesias Dominguez', weight: 6, symbol: 'Mañana'},
  {position: 4, name: 'Roberto', lastname: 'Jimenez Perez', weight: 9, symbol: 'Mañana'},
  {position: 5, name: 'Raúl', lastname: 'Pujol Diaz', weight: 10, symbol: 'Tarde'},
  {position: 6, name: 'Oriol', lastname: 'Morales Caballero', weight: 11, symbol: 'Mañana'},
  {position: 7, name: 'José', lastname: 'Gomez Flores', weight: 2, symbol: 'Tarde'}
];

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
