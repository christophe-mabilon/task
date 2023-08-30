import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateTaskRoutingModule } from './update-task-routing.module';
import { MainUpdateTaskComponent } from './main-update-task/main-update-task.component';
import { UpdateTaskFormComponent } from './update-task-form/update-task-form.component';


@NgModule({
  declarations: [
    MainUpdateTaskComponent,
    UpdateTaskFormComponent
  ],
  imports: [
    CommonModule,
    UpdateTaskRoutingModule
  ]
})
export class UpdateTaskModule { }
