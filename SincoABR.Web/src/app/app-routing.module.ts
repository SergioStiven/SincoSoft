import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeacherComponent } from './teacher/teacher.component';
import { SubjectComponent } from './subject/subject.component';

const routes: Routes = [
  { path: 'teacher', component: TeacherComponent },
  { path: 'subject', component: SubjectComponent },
  { path: '',
    redirectTo: '/teacher',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
