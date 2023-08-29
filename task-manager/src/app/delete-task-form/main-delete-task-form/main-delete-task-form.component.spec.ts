import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDeleteTaskFormComponent } from './main-delete-task-form.component';

describe('MainDeleteTaskFormComponent', () => {
  let component: MainDeleteTaskFormComponent;
  let fixture: ComponentFixture<MainDeleteTaskFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainDeleteTaskFormComponent]
    });
    fixture = TestBed.createComponent(MainDeleteTaskFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
