import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatRadioModule, MatSelectModule, MatInputModule,
         MatTableModule, MatTooltipModule } from '@angular/material';
import { DatePipe } from '@angular/common';
import {MatListModule} from '@angular/material/list';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { StudentAddComponent } from './student-add/student-add.component';

import { StudentComponent } from './student.component';
import { StudentRoutingModule } from './student-routing.module';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentReportComponent } from './student-report/student-report.component';
import { StudentAsigateMateryComponent } from './student-asigate-matery/student-asigate-matery.component';

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
    MatTableModule,
    MatListModule,
    MatSnackBarModule,
    MatTooltipModule
  ],
  declarations: [
    StudentComponent,
    StudentAddComponent,
    StudentListComponent,
    StudentReportComponent,
    StudentAsigateMateryComponent,
  ],
  providers:[
    DatePipe
  ]
})
export class StudentModule {

}
