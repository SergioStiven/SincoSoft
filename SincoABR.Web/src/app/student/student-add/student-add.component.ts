import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../shared/student.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {

  studentId = 0;
  messageNotif = '';

  studentForm = this.fb.group({
    Id: 0,
    Name: null,
    LastName: [null, Validators.required],
    TypeId: [null, Validators.required],
    Identification: [null, Validators.required],
    Dob: [null, Validators.required],
    Phone: [null, Validators.required],
    Address: [null, Validators.required],
    City: [null, Validators.required],
    Grade: [null, Validators.required],
    StudyDay: [null, Validators.required]
  });

  idTypes = [
    {name: 'Tarjeta de identidad', id: 1},
    {name: 'Cédula de ciudadanía', id: 2},
    {name: 'Cédula de extranjería', id: 3}
  ];

  grades = [
    {name: 'Primero', id: 1},
    {name: 'Segundo', id: 2},
    {name: 'Tercero', id: 3},
    {name: 'Cuarto', id: 4},
    {name: 'Quinto', id: 5},
    {name: 'Sexto', id: 6},
    {name: 'Septimo', id: 7},
    {name: 'Octavo', id: 8},
    {name: 'Noveno', id: 9},
    {name: 'Decimo', id: 10},
    {name: 'Once', id: 11},
  ];

  studyDays = [
    {name: 'Mañana', id: 1},
    {name: 'Tarde', id: 2}
  ];

  constructor(private fb: FormBuilder, private studentService: StudentService,
              private route: ActivatedRoute, public snackBar: MatSnackBar) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id != null) {
      this.studentId = parseInt(id, 10);
      this.getStudent(this.studentId);
    }
  }

  getStudent(id: number): void {
    this.studentService.getById(id)
        .subscribe(res => {
          console.log(res.Grade);
          this.studentForm.patchValue({
            Id: res.Id,
            Name: res.Name,
            LastName: res.LastName,
            Identification: res.Identification,
            Phone: res.Phone,
            Address: res.Address,
            City: res.City,
            Grade: res.Grade,
            Dob: res.Dob,
            TypeId: res.TypeId,
            StudyDay: res.StudyDay
          });
        });
  }

  onSubmit() {
    if (this.studentForm.valid) {
      const student = this.studentForm.value;
      if (student.Id > 0) {
        this.studentService.update(student, student.Id)
            .subscribe(res => {
              this.messageNotif = 'La información se ha actualizado.';
            });
      } else {
        this.studentService.save(student)
            .subscribe(res => {
              console.log(res);
              this.messageNotif = 'La información se ha guardado.';
            });
      }
    }
  }
}
