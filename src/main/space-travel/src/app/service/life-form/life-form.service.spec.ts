import { TestBed } from '@angular/core/testing';

import { LifeFormService } from './life-form.service';

describe('LifeFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LifeFormService = TestBed.get(LifeFormService);
    expect(service).toBeTruthy();
  });
});
