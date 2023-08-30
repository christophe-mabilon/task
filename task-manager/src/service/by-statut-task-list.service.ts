import { Injectable, OnDestroy } from '@angular/core';
import { Status } from 'src/model/status.enum';
import { Task } from 'src/model/task';
import { CRUDTaskListService } from './crudtask-list.service';
import { Observable, Subject } from 'rxjs';

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
  getTasksByStatus(status: Status): Observable<Task[]> {
    let selectedTasksByStatus = new Subject<Task[]>();
    this.read().subscribe({
      next: (tasks: Task[]) => {
        selectedTasksByStatus.next(
          tasks.filter((task) => task.status === status)
        );
      },
    });
    return selectedTasksByStatus.asObservable();
  }
}
