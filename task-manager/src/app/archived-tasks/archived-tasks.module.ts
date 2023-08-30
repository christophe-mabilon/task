import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArchivedTasksRoutingModule } from './archived-tasks-routing.module';
import { ArchivedTasksComponent } from './archived-tasks.component';
import { TaskModule } from '../task/task.module';
import { UpdateTaskModule } from '../update-task/update-task.module';

@NgModule({
  declarations: [ArchivedTasksComponent],
  imports: [
    CommonModule,
    ArchivedTasksRoutingModule,
    TaskModule,
    UpdateTaskModule,
  ],
})
export class ArchivedTasksModule {}
