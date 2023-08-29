import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { Task } from 'src/model/task';
import { CRUDTaskListService } from 'src/service/crudtask-list.service';

@Component({
  selector: 'app-main-delete-task-form',
  templateUrl: './main-delete-task-form.component.html',
  styleUrls: ['./main-delete-task-form.component.scss'],
})
export class MainDeleteTaskFormComponent {
  private unsubscribe$ = new Subject();
  successDelete = false;
  constructor(
    private crudTaskListService: CRUDTaskListService,
    private router: Router
  ) {}

  ngOnDestroy(): void {
    this.unsubscribeObservables();
  }

  unsubscribeObservables(): void {
    this.unsubscribe$.next(void 0);
    this.unsubscribe$.complete;
  }

  deleteTask(task: Task): void {
    this.crudTaskListService
      .deleteById(task.id!)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: (result: Task) => {
          if (result) {
            this.successDelete = true;
            setTimeout(() => {
              this.router.navigateByUrl('/display');
            }, 1500);
          }
        },
      });
  }
}
