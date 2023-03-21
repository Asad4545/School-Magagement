import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { TeacherdrawerComponent } from './teacherdrawer.component';

describe('TeacherdrawerComponent', () => {
  let component: TeacherdrawerComponent;
  let fixture: ComponentFixture<TeacherdrawerComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherdrawerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherdrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
