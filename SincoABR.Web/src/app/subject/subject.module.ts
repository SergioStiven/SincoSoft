import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatRadioModule, MatSelectModule, MatInputModule,
         MatTableModule } from '@angular/material';
import {MatListModule} from '@angular/material/list';

import { SubjectComponent } from './subject.component';
import { SubjectAddComponent } from './subject-add/subject-add.component';
import { SubjectRoutingModule } from './subject-routing.module';
import { SubjectListComponent } from './subject-list/subject-list.component';

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
    SubjectRoutingModule,
    MatInputModule,
    MatTableModule,
    MatListModule
  ],
  declarations: [
    SubjectComponent,
    SubjectAddComponent,
    SubjectListComponent
  ]
})
export class SubjectModule {

}
