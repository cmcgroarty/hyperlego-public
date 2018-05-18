import { TestBed, async, inject } from '@angular/core/testing';

import { CanSubmitTrackGuard } from './can-submit-track.guard';

describe('CanSubmitTrackGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanSubmitTrackGuard]
    });
  });

  it('should ...', inject([CanSubmitTrackGuard], (guard: CanSubmitTrackGuard) => {
    expect(guard).toBeTruthy();
  }));
});
