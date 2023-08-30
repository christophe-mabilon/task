import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Status } from 'src/model/status.enum';
import { Task } from 'src/model/task';

@Component({
  selector: 'app-update-task-form',
  templateUrl: './update-task-form.component.html',
  styleUrls: ['./update-task-form.component.scss'],
})
export class UpdateTaskFormComponent implements OnInit {
  @Input() taskToUpdate!: Task;
  @Output() taskupdated = new EventEmitter<FormGroup>();
  editForm!: FormGroup;
  status = Object.values(Status);

  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.initForm();
    if (this.taskToUpdate) {
      this.editForm.controls['id'].patchValue(this.taskToUpdate.id);
      this.editForm.controls['title'].patchValue(this.taskToUpdate.title);
      this.editForm.controls['description'].patchValue(
        this.taskToUpdate.description
      );
      this.editForm.controls['status'].patchValue(this.taskToUpdate.status);
      this.editForm.controls['creationDate'].patchValue(
        this.taskToUpdate.creationDate
      );
    }
  }
  initForm() {
    this.editForm = this.fb.group({
      id: null,
      title: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(30),
        ],
      ],
      description: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50),
        ],
      ],
      status: ['', Validators.required],
      creationDate: ['', Validators.required],
    });
  }

  addTask() {
    if (this.editForm.valid) {
      this.taskupdated.emit(this.editForm);
    } else {
      alert("Le formulaire n'est pas valide");
    }
  }
}
