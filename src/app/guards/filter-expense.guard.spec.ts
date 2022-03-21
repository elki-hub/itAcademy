import { TestBed } from '@angular/core/testing';

import { FilterExpenseGuard } from './filter-expense.guard';

describe('FilterExpenseGuard', () => {
  let guard: FilterExpenseGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(FilterExpenseGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
