import { TestBed } from '@angular/core/testing';

import { GenericTableServiceService } from './generic-table-service.service';

describe('GenericTableServiceService', () => {
  let service: GenericTableServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenericTableServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
