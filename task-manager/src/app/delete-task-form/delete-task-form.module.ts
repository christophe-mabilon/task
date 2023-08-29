import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeleteTaskFormRoutingModule } from './delete-task-form-routing.module';
import { DeleteTaskFormComponent } from './delete-task-form/delete-task-form.component';
import { MainDeleteTaskFormComponent } from './main-delete-task-form/main-delete-task-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    DeleteTaskFormComponent,
    MainDeleteTaskFormComponent
  ],
  imports: [
    CommonModule,
    DeleteTaskFormRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DeleteTaskFormRoutingModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
  ]
})
export class DeleteTaskFormModule { }
