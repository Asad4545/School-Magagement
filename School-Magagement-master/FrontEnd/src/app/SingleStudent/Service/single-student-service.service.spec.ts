import { TestBed } from '@angular/core/testing';

import { SingleStudentServiceService } from './single-student-service.service';

describe('SingleStudentServiceService', () => {
  let service: SingleStudentServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SingleStudentServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
