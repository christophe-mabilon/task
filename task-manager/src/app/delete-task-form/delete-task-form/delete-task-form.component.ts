import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { Task } from 'src/model/task';
import { CRUDTaskListService } from 'src/service/crudtask-list.service';

@Component({
  selector: 'app-delete-task-form',
  templateUrl: './delete-task-form.component.html',
  styleUrls: ['./delete-task-form.component.scss'],
})
export class DeleteTaskFormComponent {
  @Output() deletedTaskEmiter = new EventEmitter<Task>();
  form!: FormGroup;
  private unsubscribe$ = new Subject();
  selectedTask!: Task[];
  submitedForm = false;
  constructor(
    private fb: FormBuilder,
    private crudTaskListService: CRUDTaskListService
  ) {}
  ngOnDestroy(): void {
    this.unsubscribeObservables();
  }

  unsubscribeObservables(): void {
    this.unsubscribe$.next(void 0);
    this.unsubscribe$.complete;
  }

  ngOnInit(): void {
    this.initSearch();
  }

  initSearch() {
    this.form = this.fb.group({
      search: ['', [Validators.required, Validators.minLength(1)]],
    });
  }

  findTask() {
    this.submitedForm = true;
    this.crudTaskListService
      .read()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: (result: Task[]) => {
          this.selectedTask = result.filter(
            (task) =>
              task.title.toLowerCase() ===
              this.form.controls['search'].value.toLowerCase()
          );
        },
      });
  }
  deleteTask(task: Task) {
    if (this.selectedTask) {
      this.deletedTaskEmiter.emit(task);
      this.submitedForm = false;
    }
  }
}
