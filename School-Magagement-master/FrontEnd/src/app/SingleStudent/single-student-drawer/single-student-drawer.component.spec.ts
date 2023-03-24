import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { SingleStudentDrawerComponent } from './single-student-drawer.component';

describe('SingleStudentDrawerComponent', () => {
  let component: SingleStudentDrawerComponent;
  let fixture: ComponentFixture<SingleStudentDrawerComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleStudentDrawerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleStudentDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
