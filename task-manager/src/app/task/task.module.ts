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
import { DateFormatPipe } from '../utils/date-format.pipe';

@NgModule({
  declarations: [TaskComponent, TaskListComponent, MainTaskComponent,DateFormatPipe],
  imports: [
    CommonModule,
    TaskRoutingModule,
    MatDividerModule,
    TaskStatusColorDirective,
    MatIconModule,
    MatButtonModule,
    DatePipe
  ],
  exports: [TaskComponent],
})
export class TaskModule {}
