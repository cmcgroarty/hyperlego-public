import { TestBed, inject } from '@angular/core/testing';

import { ScoreStoreService } from './score-store.service';

describe('ScoreStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScoreStoreService]
    });
  });

  it('should be created', inject([ScoreStoreService], (service: ScoreStoreService) => {
    expect(service).toBeTruthy();
  }));
});
