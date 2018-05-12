import { TestBed, inject } from '@angular/core/testing';

import { MatchStoreService } from './match-store.service';

describe('MatchStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MatchStoreService]
    });
  });

  it('should be created', inject([MatchStoreService], (service: MatchStoreService) => {
    expect(service).toBeTruthy();
  }));
});
