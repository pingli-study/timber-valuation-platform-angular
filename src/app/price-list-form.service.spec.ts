import { TestBed } from '@angular/core/testing';

import { PriceListFormService } from './price-list-form.service';

describe('PriceListFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PriceListFormService = TestBed.get(PriceListFormService);
    expect(service).toBeTruthy();
  });
});
