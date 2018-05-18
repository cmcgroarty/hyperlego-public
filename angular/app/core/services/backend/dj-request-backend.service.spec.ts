import { TestBed, inject } from '@angular/core/testing';

import { DJRequestBackendService } from './dj-request-backend.service';

describe('DJRequestBackendService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DJRequestBackendService]
    });
  });

  it('should be created', inject([DJRequestBackendService], ( service: DJRequestBackendService) => {
    expect(service).toBeTruthy();
  }));
});
