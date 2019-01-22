import { TestBed } from '@angular/core/testing';

import { StoreGoldService } from './store-gold.service';

describe('StoreGoldService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StoreGoldService = TestBed.get(StoreGoldService);
    expect(service).toBeTruthy();
  });
});
