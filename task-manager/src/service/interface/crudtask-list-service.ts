import { Observable } from 'rxjs/internal/Observable';
import { Task } from 'src/model/task';

export interface CRUDTaskListService {
  unsubscribeObservables(): void;
  create(task: Task): Task;
  read(): Observable<Task[]>;
  updateById(id: number, taskToUpdate: Task): Observable<Task>;
  deleteById(id: number): void;
}
