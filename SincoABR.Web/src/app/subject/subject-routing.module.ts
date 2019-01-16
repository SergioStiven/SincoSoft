import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubjectComponent } from './subject.component';
import { SubjectAddComponent } from './subject-add/subject-add.component';
import { SubjectListComponent } from './subject-list/subject-list.component';

const subjectRoutes: Routes = [
  {
    path: 'subject',
    component: SubjectComponent,
    children: [
      {
        path: '',
        component: SubjectListComponent
      },
      {
        path: 'subject-list',
        component: SubjectListComponent
      },
      {
        path: 'subject-add',
        component: SubjectAddComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(subjectRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class SubjectRoutingModule {

}
