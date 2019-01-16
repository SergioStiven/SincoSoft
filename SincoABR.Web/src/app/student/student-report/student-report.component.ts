import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { StudentService } from '../shared/student.service';
import { Student } from '../shared/student';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-report',
  templateUrl: './student-report.component.html',
  styleUrls: ['./student-report.component.css']
})
export class StudentReportComponent implements OnInit {

  student: Student;
  displayedColumns: string[] = ['Matter', 'Teacher.Name', 'Note'];
  dataSource = new MatTableDataSource();

  constructor(private studentService: StudentService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.student = new Student;
    this.getNotesByStudent();
  }

  getNotesByStudent(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.studentService.getById(parseInt(id, 10))
        .subscribe(res => {
          console.log(res);
          this.student = res;
          this.dataSource.data = res.Matters;
        });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  asigante() {

  }
}
