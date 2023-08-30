import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { Task } from 'src/model/task';
import { CRUDTaskListService } from 'src/service/crudtask-list.service';
import { TaskComponent } from './task.component';
import { Status } from 'src/model/status.enum';
import { Component } from '@angular/core';

describe('CRUDTaskListService', () => {
  let service: CRUDTaskListService;
  let httpTestingController: HttpTestingController;
  @Component({
    selector: 'app-host-component',
    template: ` <app-task [task]="task" [taskIndex]="taskIndex"></app-task> `,
  })
  class TestHostComponent {
    task: Task = {
      id: 1,
      title: 'Task 1',
      description: 'my task 1 description',
      status: Status.TERMINEE,
      creationDate: new Date(),
    };
  }

  describe('TaskComponent', () => {
    let hostComponent: TestHostComponent;
    let fixture: ComponentFixture<TestHostComponent>;
    let taskComponent: TaskComponent;
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [CRUDTaskListService],
      });

      service = TestBed.inject(CRUDTaskListService);
      httpTestingController = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
      httpTestingController.verify();
    });

    it('should be created', () => {
      expect(service).toBeTruthy();
    });

    it('should create a task', () => {
      const mockTask: Task = {
        id: 1,
        title: 'Task 1',
        description: 'my task 1 description',
        status: Status.TERMINEE,
        creationDate: new Date(),
      };

      service.create(mockTask).subscribe((response: Task) => {
        expect(response).toEqual(mockTask);
      });

      const req = httpTestingController.expectOne(service.baseUrl);
      expect(req.request.method).toBe('POST');
      req.flush(mockTask);
    });

    it('should get a list of tasks', () => {
      const mockTasks: Task[] = [
        {
          id: 1,
          title: 'Task 1',
          description: 'my task 1 description',
          status: Status.TERMINEE,
          creationDate: new Date(),
        },
        {
          id: 2,
          title: 'Task 2',
          description: 'my task 2 description',
          status: Status.A_FAIRE,
          creationDate: new Date(),
        },
      ];

      service.read().subscribe((response: Task[]) => {
        expect(response).toEqual(mockTasks);
      });

      const req = httpTestingController.expectOne(service.baseUrl);
      expect(req.request.method).toBe('GET');
      req.flush(mockTasks);
    });

    it('should update a task by id', () => {
      const taskId = 1;
      const mockUpdatedTask: Task = {
        id: 1,
        title: 'Task 1',
        description: 'my task 1 description',
        status: Status.TERMINEE,
        creationDate: new Date(),
      };

      service
        .updateById(taskId, mockUpdatedTask)
        .subscribe((response: Task) => {
          expect(response).toEqual(mockUpdatedTask);
        });

      const req = httpTestingController.expectOne(
        `${service.baseUrl}/${taskId}`
      );
      expect(req.request.method).toBe('PUT');
      req.flush(mockUpdatedTask);
    });

    it('should delete a task by id', () => {
      const taskId = 1;
      const mockDeletedTask: Task = {
        id: 1,
        title: 'Task 1',
        description: 'my task 1 description',
        status: Status.TERMINEE,
        creationDate: new Date(),
      };

      service.deleteById(taskId).subscribe((response: Task) => {
        expect(response).toEqual(mockDeletedTask);
      });

      const req = httpTestingController.expectOne(
        `${service.baseUrl}/${taskId}`
      );
      expect(req.request.method).toBe('DELETE');
      req.flush(mockDeletedTask);
    });
  });
});
