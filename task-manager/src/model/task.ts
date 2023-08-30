import { Status } from './status.enum';

export interface Task {
  id?: number;
  title: string;
  description: string;
  status: Status;
  creationDate: Date;
  editionDate?: Date;
}
