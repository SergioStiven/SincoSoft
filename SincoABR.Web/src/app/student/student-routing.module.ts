import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student.component';
import { StudentAddComponent } from './student-add/student-add.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentAsigateMateryComponent } from './student-asigate-matery/student-asigate-matery.component';
import { StudentReportComponent } from './student-report/student-report.component';

const studentRoutes: Routes = [
  {
    path: 'student',
    component: StudentComponent,
    children: [
      {
        path: '',
        component: StudentListComponent
      },
      {
        path: 'student-list',
        component: StudentListComponent
      },
      {
        path: 'student-add',
        component: StudentAddComponent
      },
      {
        path: 'student-detail/:id',
        component: StudentAddComponent
      },
      {
        path: 'student/asignate',
        component: StudentAsigateMateryComponent
      },
      {
        path: 'student/report/:id',
        component: StudentReportComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(studentRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class StudentRoutingModule {

}
