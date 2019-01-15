import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatRadioModule, MatSelectModule, MatInputModule,
         MatTableModule } from '@angular/material';
import { DatePipe } from '@angular/common';

import { TeacherAddComponent } from './teacher-add/teacher-add.component';

// import { TeacherComponent } from './teacher.component';
import { TeacherRoutingModule } from './teacher-routing.module';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { TeacherGeneralButtonsComponent } from './teacher-general-buttons/teacher-general-buttons.component';

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
    TeacherRoutingModule,
    MatInputModule,
    MatTableModule
  ],
  declarations: [
    // TeacherComponent,
    TeacherAddComponent,
    TeacherListComponent,
    TeacherGeneralButtonsComponent
  ],
  providers:[
    DatePipe
  ]
})
export class TeacherModule {

}
