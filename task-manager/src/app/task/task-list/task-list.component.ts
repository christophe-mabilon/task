import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Task } from 'src/model/task';
import { CRUDTaskListService } from 'src/service/crudtask-list.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject();
  taskList: Task[] = [];
  constructor(private crudTaskService: CRUDTaskListService) {}

  ngOnInit(): void {
    this.getTasks();
  }

  ngOnDestroy(): void {
    this.unsubscribeObservables();
  }

  unsubscribeObservables(): void {
    this.unsubscribe$.next(void 0);
    this.unsubscribe$.complete;
  }
  getTasks(): Task[] {
    this.crudTaskService
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
