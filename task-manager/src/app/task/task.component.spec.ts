import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskComponent } from './task.component';
import { Task } from 'src/model/task';
import { Component } from '@angular/core';
import { Status } from 'src/model/status.enum';

@Component({
  selector: 'app-host-component',
  template: `
    <app-task [task]="task" [taskIndex]="taskIndex"></app-task>
  `,
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
      declarations: [TaskComponent, TestHostComponent],
    });

    fixture = TestBed.createComponent(TestHostComponent);
    hostComponent = fixture.componentInstance;
    taskComponent = fixture.debugElement.children[0].componentInstance;
  });

  it('should create', () => {
    expect(taskComponent).toBeTruthy();
  });

  it('should display the task title', () => {
    fixture.detectChanges();
    const taskElement: HTMLElement = fixture.nativeElement.querySelector('.task-title');

    // You should use hostComponent.task.title to match the task title
    expect(taskElement.textContent).toContain(hostComponent.task.title);
  });
});