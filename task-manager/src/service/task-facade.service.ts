import { Injectable } from '@angular/core';
import { ByStatutTaskListService } from './by-statut-task-list.service';
import { Task } from 'src/model/task';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskFacadeService {
  private sharedTask = new Subject<Task>();

  constructor(private byStatutTaskListService: ByStatutTaskListService) {}

  setsharedTask(task: Task) {
    this.sharedTask.next(task);
  }

  getsharedTask(): Observable<Task> {
    return this.sharedTask.asObservable();
  }

  create(task: Task): Observable<Task> {
    return this.byStatutTaskListService.create(task);
  }

  read(): Observable<Task[]> {
    return this.byStatutTaskListService.read();
  }

  updateById(id: number, taskToUpdate: Task): Observable<Task> {
    return this.byStatutTaskListService.updateById(id, taskToUpdate);
  }

  deleteById(id: number): Observable<Task> {
    return this.byStatutTaskListService.deleteById(id);
  }
}
