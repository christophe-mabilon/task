import { TestBed, ComponentFixture } from '@angular/core/testing';
import { TaskStatusColorDirective } from './task-status-color.directive';
import { TestComponent } from './test.component';

describe('TaskStatusColorDirective', () => {
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskStatusColorDirective, TestComponent],
    });

    fixture = TestBed.createComponent(TestComponent);
  });

  it('should set color to blue for status "EN_COURS"', () => {
    const divElement: HTMLElement = fixture.nativeElement.querySelector('div');
    const component = fixture.componentInstance;

    component.status = 'EN_COURS';
    fixture.detectChanges();

    expect(divElement.style.color).toBe('blue');
  });

  it('should set color to red for status "A_FAIRE"', () => {
    const divElement: HTMLElement = fixture.nativeElement.querySelector('div');
    const component = fixture.componentInstance;

    component.status = 'A_FAIRE';
    fixture.detectChanges();

    expect(divElement.style.color).toBe('red');
  });

  it('should set color to green for status "TERMINEE"', () => {
    const divElement: HTMLElement = fixture.nativeElement.querySelector('div');
    const component = fixture.componentInstance;

    component.status = 'TERMINEE';
    fixture.detectChanges();

    expect(divElement.style.color).toBe('green');
  });

  it('should remove color for unknown status', () => {
    const divElement: HTMLElement = fixture.nativeElement.querySelector('div');
    const component = fixture.componentInstance;

    component.status = 'UNKNOWN_STATUS';
    fixture.detectChanges();

    expect(divElement.style.color).toBe('');
  });
});
