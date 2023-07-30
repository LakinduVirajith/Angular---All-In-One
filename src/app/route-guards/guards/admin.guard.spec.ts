import { TestBed } from '@angular/core/testing';
import { CanMatchFn } from '@angular/router';

import { adminGuard } from './admin.guard';

describe('adminGuard', () => {
  const executeGuard: CanMatchFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => adminGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
