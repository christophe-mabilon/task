import { Component, Input } from '@angular/core';
import { Task } from 'src/model/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  @Input() task!: Task;
  @Input() taskIndex!: number;
}
