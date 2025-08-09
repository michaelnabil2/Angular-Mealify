import { TestBed } from '@angular/core/testing';

import { Seafoood } from './seafoood';

describe('Seafoood', () => {
  let service: Seafoood;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Seafoood);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
