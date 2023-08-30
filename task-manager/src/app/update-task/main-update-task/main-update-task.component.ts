import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { Task } from 'src/model/task';
import { CRUDTaskListService } from 'src/service/crudtask-list.service';

@Component({
  selector: 'app-main-update-task',
  templateUrl: './main-update-task.component.html',
  styleUrls: ['./main-update-task.component.scss'],
})
export class MainUpdateTaskComponent implements OnInit, OnDestroy {
  taskToUpdate!: Task;
  private unsubscribe$ = new Subject();
  updatedTask = false;

  constructor(
    private crudTaskListService: CRUDTaskListService,
    private router: Router
  ) {}
  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.unsubscribeObservables();
  }

  unsubscribeObservables(): void {
    this.unsubscribe$.next(void 0);
    this.unsubscribe$.complete();
  }

  updateTask(formData: FormGroup) {
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
        .updateById(formData.value.id, task)
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe({
          next: (response: Task) => {
            if (response) {
              this.updatedTask = true;
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
