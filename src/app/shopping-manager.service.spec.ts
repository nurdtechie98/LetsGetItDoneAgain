import { TestBed } from '@angular/core/testing';

import { ShoppingManagerService } from './shopping-manager.service';

describe('ShoppingManagerService', () => {
  let service: ShoppingManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShoppingManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
