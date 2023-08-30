import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Status } from 'src/model/status.enum';
import { Task } from 'src/model/task';
import { ByStatutTaskListService } from 'src/service/by-statut-task-list.service';

@Component({
  selector: 'app-archived-tasks',
  templateUrl: './archived-tasks.component.html',
  styleUrls: ['./archived-tasks.component.scss'],
})
export class ArchivedTasksComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject();
  taskList: Task[] = [];
  constructor(private byStatutTaskListService: ByStatutTaskListService) {}

  ngOnInit(): void {
    this.getArchivedTasks(Status.TERMINEE);
  }

  ngOnDestroy(): void {
    this.unsubscribeObservables();
  }

  unsubscribeObservables(): void {
    this.unsubscribe$.next(void 0);
    this.unsubscribe$.complete();
  }
  getArchivedTasks(status: Status): Task[] {
    this.byStatutTaskListService
      .getTasksByStatus(status)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: (tasks: Task[]) => {
          this.taskList = tasks;
        },
      });
    return this.taskList;
  }
}
