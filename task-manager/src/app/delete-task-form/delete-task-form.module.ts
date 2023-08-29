import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeleteTaskFormRoutingModule } from './delete-task-form-routing.module';
import { DeleteTaskFormComponent } from './delete-task-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  declarations: [DeleteTaskFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DeleteTaskFormRoutingModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
  ],
})
export class DeleteTaskFormModule {}
