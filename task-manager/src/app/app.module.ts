import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { TaskModule } from './task/task.module';
import { CRUDTaskListService } from 'src/service/crudtask-list.service';
import { HttpClientModule } from '@angular/common/http';
import { AddTaskFormModule } from './add-task-form/add-task-form.module';
import { DeleteTaskFormModule } from './delete-task-form/delete-task-form.module';
import { MatIconModule } from '@angular/material/icon';
import { ArchivedTasksModule } from './archived-tasks/archived-tasks.module';
import { TestComponent } from './Directive/test.component';
import { TaskStatusColorDirective } from './Directive/task-status-color.directive';

@NgModule({
  declarations: [AppComponent, HomeComponent, TestComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MatIconModule,
    TaskModule,
    HttpClientModule,
    AddTaskFormModule,
    DeleteTaskFormModule,
    ArchivedTasksModule,
    TaskStatusColorDirective,
  ],
  providers: [CRUDTaskListService],
  bootstrap: [AppComponent],
})
export class AppModule {}
