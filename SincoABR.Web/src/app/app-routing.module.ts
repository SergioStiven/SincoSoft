import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeacherComponent } from './teacher/teacher.component';
import { SubjectComponent } from './subject/subject.component';
import { TeacherAddComponent } from './teacher/teacher-add/teacher-add.component';
import { TeacherListComponent } from './teacher/teacher-list/teacher-list.component';

const routes: Routes = [
  // { path: 'teacher', component: TeacherComponent },
  {
    path: '',
    redirectTo: '/teacher',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
