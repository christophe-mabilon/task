import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { Task } from 'src/model/task';
import { Status } from 'src/model/status.enum';
import { CRUDTaskListService } from './crudtask-list.service';

describe('CRUDTaskListService', () => {
  let service: CRUDTaskListService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CRUDTaskListService],
    });
    service = TestBed.inject(CRUDTaskListService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // Vérifie qu'il n'y a pas de requêtes HTTP en attente
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create a task', () => {
    const task: Task = {
      id: 1,
      title: 'Task 1',
      description: 'my task description',
      status: Status.A_FAIRE,
      creationDate: new Date(),
    };

    service.create(task).subscribe((createdTask: Task) => {
      expect(createdTask).toEqual(task);
    });

    const req = httpTestingController.expectOne(
      'http://localhost:3000/taskList'
    );
    expect(req.request.method).toEqual('POST');
    req.flush(task); // Simule une réponse HTTP
  });

  it('should read tasks', () => {
    const tasks = [
      {
        id: 3,
        title: 'Task 3',
        description: 'my task 3 description',
        status: Status.A_FAIRE,
        creationDate: new Date(),
      },
      {
        id: 4,
        title: 'Task 4',
        description: 'my task 4 description',
        status: Status.EN_COURS,
        creationDate: new Date(),
      },
    ];

    service.read().subscribe((result: Task[]) => {
      expect(result).toEqual(tasks);
    });

    const req = httpTestingController.expectOne(
      'http://localhost:3000/taskList'
    );
    expect(req.request.method).toEqual('GET');
    req.flush(tasks); // Simule une réponse HTTP
  });

  it('should update a task by id', () => {
    const updatedTask = {
        id: 1,
        title: 'Task 1',
        description: 'my task 1 description updated',
        status: Status.TERMINEE,
        creationDate: new Date(),
      };

    service.updateById(1, updatedTask).subscribe((result: Task) => {
      expect(result).toEqual(updatedTask);
    });

    const req = httpTestingController.expectOne(
      'http://localhost:3000/taskList/1'
    );
    expect(req.request.method).toEqual('PUT');
    req.flush(updatedTask); // Simule une réponse HTTP
  });

  it('should delete a task by id', () => {
    const taskId = 1;

    service.deleteById(taskId).subscribe((result) => {
      expect(result).toBeNull(); // Vous pouvez adapter cela en fonction de votre logique de suppression
    });

    const req = httpTestingController.expectOne(
      'http://localhost:3000/taskList/1'
    );
    expect(req.request.method).toEqual('DELETE');
    req.flush(null); // Simule une réponse HTTP
  });
});
