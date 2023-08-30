import { Component, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { Task } from 'src/model/task';
import { CRUDTaskListService } from 'src/service/crudtask-list.service';

@Component({
  selector: 'app-main-add-task-form',
  templateUrl: './main-add-task-form.component.html',
  styleUrls: ['./main-add-task-form.component.scss'],
})
export class MainAddTaskFormComponent implements OnDestroy {
  private unsubscribe$ = new Subject();
  initTask = new Subject<boolean>();
  createdTask = false;

  constructor(
    private crudTaskListService: CRUDTaskListService,
    private router: Router
  ) {}

  ngOnDestroy(): void {
    this.unsubscribeObservables();
  }

  unsubscribeObservables(): void {
    this.unsubscribe$.next(void 0);
    this.unsubscribe$.complete();
  }

  addTask(formData: FormGroup) {
    formData.patchValue({ creationDate: new Date() });
    if (formData.valid) {
      const task: Task = {
        id: undefined,
        title: formData.value.title,
        description: formData.value.description,
        status: formData.value.status,
        creationDate: formData.value.creationDate,
      };

      this.crudTaskListService
        .create(task)
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe({
          next: (response) => {
            if (response) {
              this.createdTask = true;
              setTimeout(() => {
                this.router.navigateByUrl('/display');
              }, 1500);
            }
          },
        });
    } else {
      return;
    }
  }
}
