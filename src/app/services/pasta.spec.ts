import { TestBed } from '@angular/core/testing';

import { Pasta } from './sPasta';

describe('Pasta', () => {
  let service: Pasta;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Pasta);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
