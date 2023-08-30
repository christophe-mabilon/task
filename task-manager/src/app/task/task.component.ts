import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from 'src/model/task';
import { CRUDTaskListService } from 'src/service/crudtask-list.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  @Input() task!: Task;
  @Input() taskIndex!: number;
  constructor(
    private crudTaskListService: CRUDTaskListService,
    private router: Router
  ) {}

  editTask(task: Task) {
    this.crudTaskListService.setsharedTask(task);
    this.router.navigateByUrl('/edit');
  }
}
