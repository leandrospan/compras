import { TestBed } from '@angular/core/testing';

import { Database003Service } from './database003.service';

describe('Database003Service', () => {
  let service: Database003Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Database003Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
