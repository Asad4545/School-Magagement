import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleStudentComponenetComponent } from './single-student-componenet.component';

describe('SingleStudentComponenetComponent', () => {
  let component: SingleStudentComponenetComponent;
  let fixture: ComponentFixture<SingleStudentComponenetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleStudentComponenetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleStudentComponenetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
