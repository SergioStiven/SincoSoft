import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent {
  studentForm = this.fb.group({
    name: null,
    lastName: [null, Validators.required],
    idType: [null, Validators.required],
    identification: [null, Validators.required],
    dob: [null, Validators.required],
    phone: [null, Validators.required],
    address: [null, Validators.required],
    city: [null, Validators.required],
    grade: [null, Validators.required],
    day: [null, Validators.required]
  });

  hasUnitNumber = false;

  idTypes = [
    {name: 'Tarjeta de identidad', id: 'TI'},
    {name: 'Cédula de ciudadanía', id: 'CC'},
    {name: 'Cédula de extranjería', id: 'CE'}
  ];

  grades = [
    {name: '1', id: '1'},
    {name: '2', id: '2'},
    {name: '3', id: '3'},
    {name: '4', id: '4'}
  ];

  days = [
    {name: 'Mañana', id: 'M'},
    {name: 'Tarde', id: 'T'}
  ];

  constructor(private fb: FormBuilder) {}

  onSubmit() {

  }
}
