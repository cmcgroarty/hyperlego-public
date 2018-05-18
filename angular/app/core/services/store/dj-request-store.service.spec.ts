import { TestBed, inject } from '@angular/core/testing';

import { DJRequestStoreService } from './dj-request-store.service';

describe('DJRequestStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DJRequestStoreService]
    });
  });

  it('should be created', inject([DJRequestStoreService], ( service: DJRequestStoreService) => {
    expect(service).toBeTruthy();
  }));
});
