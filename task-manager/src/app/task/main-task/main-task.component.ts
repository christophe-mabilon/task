import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Task } from 'src/model/task';
import { CRUDTaskListService } from 'src/service/crudtask-list.service';

@Component({
  selector: 'app-main-task',
  templateUrl: './main-task.component.html',
  styleUrls: ['./main-task.component.scss'],
})
export class MainTaskComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject();
  task!: Task;
  constructor(private crudTaskService: CRUDTaskListService) {}

  ngOnInit(): void {
    this.getTask();
  }

  ngOnDestroy(): void {
    this.unsubscribeObservables();
  }

  unsubscribeObservables(): void {
    this.unsubscribe$.next(void 0);
    this.unsubscribe$.complete();
  }
  getTask(): Task {
    this.crudTaskService
      .read()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: (tasks: Task[]) => {
          this.task = tasks[0];
        },
      });
    return this.task!;
  }
}
