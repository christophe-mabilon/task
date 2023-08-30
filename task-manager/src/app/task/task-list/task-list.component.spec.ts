import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskListComponent } from './task-list.component';
import { TaskFacadeService } from 'src/service/task-facade.service';
import { of } from 'rxjs';
import { Status } from 'src/model/status.enum';

describe('TaskListComponent', () => {
  let component: TaskListComponent;
  let fixture: ComponentFixture<TaskListComponent>;
  let mockTaskFacadeService: jasmine.SpyObj<TaskFacadeService>;

  beforeEach(() => {
    mockTaskFacadeService = jasmine.createSpyObj('TaskFacadeService', ['read']);

    TestBed.configureTestingModule({
      declarations: [TaskListComponent],
      providers: [
        { provide: TaskFacadeService, useValue: mockTaskFacadeService },
      ],
    });

    fixture = TestBed.createComponent(TaskListComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch tasks on init', () => {
    const mockTasks = [
      {
        id: 1,
        title: 'Task 1',
        description: 'my task 1 description',
        status: Status.EN_COURS,
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

    mockTaskFacadeService.read.and.returnValue(of(mockTasks));

    fixture.detectChanges(); // Trigger ngOnInit

    expect(component.taskList).toEqual(mockTasks);
  });

  it('should unsubscribe from observables on destroy', () => {
    spyOn(component.unsubscribe$, 'next');
    spyOn(component.unsubscribe$, 'complete');

    fixture.destroy(); // Trigger ngOnDestroy

    expect(component.unsubscribe$.next).toHaveBeenCalled();
    expect(component.unsubscribe$.complete).toHaveBeenCalled();
  });
});
