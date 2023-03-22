import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { ClassDrawerComponent } from './class-drawer.component';

describe('ClassDrawerComponent', () => {
  let component: ClassDrawerComponent;
  let fixture: ComponentFixture<ClassDrawerComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassDrawerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
