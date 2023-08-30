import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { Status } from 'src/model/status.enum';
import { Task } from 'src/model/task';
import { CRUDTaskListService } from 'src/service/crudtask-list.service';

@Component({
  selector: 'app-update-task-form',
  templateUrl: './update-task-form.component.html',
  styleUrls: ['./update-task-form.component.scss'],
})
export class UpdateTaskFormComponent implements OnInit {
  unsubscribe$ = new Subject();
  taskToUpdate!: Task;
  @Output() taskUpdated = new EventEmitter<FormGroup>();
  editForm!: FormGroup;
  status = Object.values(Status);

  constructor(
    private fb: FormBuilder,
    private crudTaskListService: CRUDTaskListService
  ) {
    this.initForm();this.getSelectedTask();
  }
  ngOnInit(): void {

  }

  getSelectedTask(): void {
    this.crudTaskListService.getsharedTask().subscribe({
      next: (selectedTask: Task) => {
        this.taskToUpdate = selectedTask;
        this.patchForm(selectedTask);
      },
    });
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
      editionDate: ['', Validators.required],
    });
  }

  patchForm(task: Task) {
    this.editForm.controls['id'].patchValue(task.id);
    this.editForm.controls['title'].patchValue(task.title);
    this.editForm.controls['description'].patchValue(task.description);
    this.editForm.controls['status'].patchValue(task.status);
    this.editForm.controls['creationDate'].patchValue(task.creationDate);
    this.editForm.controls['editionDate'].patchValue(new Date());
  }

  editFormTask() {
    if (this.editForm.valid) {
      this.taskUpdated.emit(this.editForm);
    } else {
      alert("Le formulaire n'est pas valide");
    }
  }
}
