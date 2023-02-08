import { TestBed } from '@angular/core/testing';

import { WebstudentService } from './webstudent.service';

describe('WebstudentService', () => {
  let service: WebstudentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebstudentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
