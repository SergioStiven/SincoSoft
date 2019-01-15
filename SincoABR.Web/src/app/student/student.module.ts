import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatRadioModule, MatSelectModule, MatInputModule,
         MatTableModule } from '@angular/material';
import { DatePipe } from '@angular/common';

import { StudentAddComponent } from './student-add/student-add.component';

import { StudentComponent } from './student.component';
import { StudentRoutingModule } from './student-routing.module';
import { StudentListComponent } from './student-list/student-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    StudentRoutingModule,
    MatInputModule,
    MatTableModule
  ],
  declarations: [
    StudentComponent,
    StudentAddComponent,
    StudentListComponent
  ],
  providers:[
    DatePipe
  ]
})
export class StudentModule {

}
