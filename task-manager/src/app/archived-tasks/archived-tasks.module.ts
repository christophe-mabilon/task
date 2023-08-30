import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArchivedTasksRoutingModule } from './archived-tasks-routing.module';
import { ArchivedTasksComponent } from './archived-tasks.component';
import { TaskModule } from '../task/task.module';

@NgModule({
  declarations: [ArchivedTasksComponent],
  imports: [CommonModule, ArchivedTasksRoutingModule, TaskModule],
})
export class ArchivedTasksModule {}
