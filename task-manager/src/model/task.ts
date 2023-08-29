import { Status } from './satus.enum';

export interface Task {
  id?:number;
  title: string;
  description: string;
  status: Status;
  creationDate: Date;
}
