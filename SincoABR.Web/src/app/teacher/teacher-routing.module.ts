import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherComponent } from './teacher.component';
import { TeacherAddComponent } from './teacher-add/teacher-add.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { AsignateMateryComponent } from './asignate-matery/asignate-matery.component';
import { from } from 'rxjs';

const teacherRoutes: Routes = [
  {
    path: 'teacher',
    component: TeacherComponent,
    children: [
      {
        path: '',
        component: TeacherListComponent
      },
      {
        path: 'teacher-list',
        component: TeacherListComponent
      },
      {
        path: 'teacher-add',
        component: TeacherAddComponent
      },
      {
        path: 'teacher-detail/:id',
        component: TeacherAddComponent
      },
      {
        path: 'teacher-asignateMatery',
        component: AsignateMateryComponent,
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(teacherRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class TeacherRoutingModule {

}
