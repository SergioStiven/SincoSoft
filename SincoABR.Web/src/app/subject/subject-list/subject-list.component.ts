import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import { SubjectService } from '../shared/subject.service';
import { Subject } from '../shared/subject';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.css']
})
export class SubjectListComponent implements OnInit {

  subjects: Subject[];
  displayedColumns: string[] = ['Name'];
  dataSource = new MatTableDataSource();

  constructor(private subjectService: SubjectService) {}

  ngOnInit() {
    this.getSubjects();
  }

  getSubjects(): void {
    this.subjectService.getAll()
        .subscribe(res => {
          this.subjects = res;
          this.dataSource.data = this.subjects;
        });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
