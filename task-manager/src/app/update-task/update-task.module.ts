import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateTaskRoutingModule } from './update-task-routing.module';
import { MainUpdateTaskComponent } from './main-update-task/main-update-task.component';
import { UpdateTaskFormComponent } from './update-task-form/update-task-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from '../../shared/shared.module';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [MainUpdateTaskComponent, UpdateTaskFormComponent],
  imports: [
    CommonModule,
    UpdateTaskRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    SharedModule,
    MatSelectModule,
    MatButtonModule,
  ],
  exports: [MainUpdateTaskComponent],
})
export class UpdateTaskModule {}
