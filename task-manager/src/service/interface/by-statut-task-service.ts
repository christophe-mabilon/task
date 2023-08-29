import { Observable } from 'rxjs/internal/Observable';
import { Task } from 'src/model/task';

export interface ByStatutTaskService {
  getByStatus(status: string): Observable<Task[]>
}
