import { TestBed } from '@angular/core/testing';

import { DonorRecordService } from './donor-record.service';

describe('DonorRecordService', () => {
  let service: DonorRecordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DonorRecordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
