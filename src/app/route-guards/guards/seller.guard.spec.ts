import { TestBed } from '@angular/core/testing';
import { CanMatchFn } from '@angular/router';

import { sellerGuard } from './seller.guard';

describe('sellerGuard', () => {
  const executeGuard: CanMatchFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => sellerGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
