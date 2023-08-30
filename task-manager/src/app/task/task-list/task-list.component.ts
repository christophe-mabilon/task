import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Task } from 'src/model/task';
import { TaskFacadeService } from 'src/service/task-facade.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit, OnDestroy {
  unsubscribe$ = new Subject();
  taskList: Task[] = [];
  constructor(private taskFacadeService: TaskFacadeService) {}

  ngOnInit(): void {
    this.getTasks();
  }

  ngOnDestroy(): void {
    this.unsubscribeObservables();
  }

  unsubscribeObservables(): void {
    this.unsubscribe$.next(void 0);
    this.unsubscribe$.complete();
  }
  getTasks(): Task[] {
    this.taskFacadeService
      .read()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: (tasks: Task[]) => {
          this.taskList = tasks;
        },
      });
    return this.taskList;
  }
}
