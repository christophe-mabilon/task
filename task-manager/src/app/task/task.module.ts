import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { TaskComponent } from './task.component';
import { TaskRoutingModule } from './task.routing.module';
import { MainTaskComponent } from './main-task/main-task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { TaskStatusColorDirective } from '../Directive/task-status-color.directive';

@NgModule({
  declarations: [TaskComponent,TaskListComponent,MainTaskComponent],
  imports: [
    CommonModule,
    TaskRoutingModule,
    MatDividerModule,
    TaskStatusColorDirective,
    MatIconModule,
    MatButtonModule,
    DatePipe
  ]
})
export class TaskModule {}
