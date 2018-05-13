import { TestBed, inject } from '@angular/core/testing';

import { TimerStoreService } from './timer-store.service';

describe('TimerStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TimerStoreService]
    });
  });

  it('should be created', inject([TimerStoreService], (service: TimerStoreService) => {
    expect(service).toBeTruthy();
  }));
});
