import { Injectable, OnDestroy } from '@angular/core';
import { Status } from 'src/model/status.enum';
import { Task } from 'src/model/task';
import { CRUDTaskListService } from './crudtask-list.service';

@Injectable({
  providedIn: 'root',
})
export class ByStatutTaskListService
  extends CRUDTaskListService
  implements OnDestroy
{
  override ngOnDestroy(): void {
    this.unsubscribeObservables();
  }

  /**
   * Renvoi une liste de task filtée par status
   * @param status
   * @returns
   */
  getTasksByStatus(status: Status): Task[] {
    let selectedTasksByStatus: Task[] = [];
    this.read().subscribe({
      next: (tasks: Task[]) => {
        selectedTasksByStatus = tasks.filter((task) => task.status === status);
      },
    });
    return selectedTasksByStatus;
  }
}
