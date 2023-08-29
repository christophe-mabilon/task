import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Status } from 'src/model/status.enum';

@Component({
  selector: 'app-add-task-form',
  templateUrl: './add-task-form.component.html',
  styleUrls: ['./add-task-form.component.scss'],
})
export class AddTaskFormComponent implements OnInit {
  @Output() taskAdded = new EventEmitter<FormGroup>();
  addForm!: FormGroup;
  status = Object.values(Status);

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.addForm = this.fb.group({
      id: null,
      title: [
        '',
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(30),
        ],
      ],
      description: [
        '',
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(50),
        ],
      ],
      status: ['', Validators.required],
      creationDate: ['', Validators.required],
    });
  }

  addTask() {
    this.addForm.controls['creationDate'].patchValue(new Date());
    if (this.addForm.valid) {
      this.taskAdded.emit(this.addForm);console.log(this.addForm.value)
    } else {
      alert("Le formulaire n'est pas valide");
    }
  }
}
