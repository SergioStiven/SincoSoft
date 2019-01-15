import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import { TeacherService } from '../teacher.service';
import { Teacher } from '../teacher';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements OnInit {

  teachers: Teacher[];
  displayedColumns: string[] = ['Name', 'LastName', 'Grade', 'StudyDay'];
  dataSource = new MatTableDataSource();

  constructor(private teacherService: TeacherService) {}

  ngOnInit() {
    this.getTeachers();
  }

  getTeachers(): void {
    this.teacherService.getAll()
        .subscribe(res => {
          this.teachers = res;
          this.dataSource.data = this.teachers;
        });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
