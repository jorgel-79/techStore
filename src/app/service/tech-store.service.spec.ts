import { TestBed } from '@angular/core/testing';

import { TechStoreService } from './tech-store.service';

describe('TechStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TechStoreService = TestBed.get(TechStoreService);
    expect(service).toBeTruthy();
  });
});
