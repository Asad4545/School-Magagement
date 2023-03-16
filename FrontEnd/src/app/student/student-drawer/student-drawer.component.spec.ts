import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { StudentDrawerComponent } from './student-drawer.component';

describe('StudentDrawerComponent', () => {
  let component: StudentDrawerComponent;
  let fixture: ComponentFixture<StudentDrawerComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentDrawerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
