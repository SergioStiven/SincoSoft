import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
// import { StudentService } from '../student.service';

@Component({
  selector: 'app-subject-add',
  templateUrl: './subject-add.component.html',
  styleUrls: ['./subject-add.component.css']
})
export class SubjectAddComponent {

  messageNotif = '';

  subjectForm = this.fb.group({
    Id: 0,
    Name: [null, Validators.required]
  });

  constructor(private fb: FormBuilder, private route: ActivatedRoute) {}

  onSubmit() {
    if (this.subjectForm.valid) {
      this.messageNotif = 'La información se ha guardado.';
    }
  }
}
