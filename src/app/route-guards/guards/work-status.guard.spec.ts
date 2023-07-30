import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { workStatusGuard } from './work-status.guard';

describe('workStatusGuard', () => {
  const executeGuard: CanDeactivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => workStatusGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
