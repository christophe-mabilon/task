import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTaskFormRoutingModule } from './add-task-form-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MainAddTaskFormComponent } from './main-add-task-form/main-add-task-form.component';
import { AddTaskFormComponent } from './add-task-form/add-task-form.component';
import { SharedModule } from 'src/shared/shared.module';

@NgModule({
  declarations: [AddTaskFormComponent, MainAddTaskFormComponent],
  imports: [
    CommonModule,
    AddTaskFormRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatOptionModule,
    MatSelectModule,
    SharedModule,
  ],
})
export class AddTaskFormModule {}
