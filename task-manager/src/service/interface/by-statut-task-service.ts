import { Status } from 'src/model/status.enum';
import { Task } from 'src/model/task';

export interface ByStatutTaskService {
  getTasksByStatus(status: Status): Task[]
}
