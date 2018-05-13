import { TestBed, inject } from '@angular/core/testing';

import { TimerBackendService } from './timer-backend.service';

describe('TimerBackendService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TimerBackendService]
    });
  });

  it('should be created', inject([TimerBackendService], (service: TimerBackendService) => {
    expect(service).toBeTruthy();
  }));
});
