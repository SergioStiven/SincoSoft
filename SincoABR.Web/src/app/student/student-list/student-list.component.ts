import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import { StudentService } from '../student.service';
import { Student } from '../student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students: Student[];
  displayedColumns: string[] = ['Name', 'LastName', 'Grade', 'StudyDay', 'asigante'];
  dataSource = new MatTableDataSource();

  constructor(private studentService: StudentService){}

  ngOnInit() {
    this.getStudents();
  }

  getStudents(): void {
    this.studentService.getAll()
        .subscribe(res => {
          this.students = res;
          this.dataSource.data = this.students;
        });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  asigante() {
    
  }
  
}
