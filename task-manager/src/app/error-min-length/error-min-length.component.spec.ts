import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorMinLengthComponent } from './error-min-length.component';

describe('ErrorMinLengthComponent', () => {
  let component: ErrorMinLengthComponent;
  let fixture: ComponentFixture<ErrorMinLengthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ErrorMinLengthComponent]
    });
    fixture = TestBed.createComponent(ErrorMinLengthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
