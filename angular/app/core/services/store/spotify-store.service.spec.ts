import { TestBed, inject } from '@angular/core/testing';

import { SpotifyStoreService } from './spotify-store.service';

describe('SpotifyStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpotifyStoreService]
    });
  });

  it('should be created', inject([SpotifyStoreService], (service: SpotifyStoreService) => {
    expect(service).toBeTruthy();
  }));
});
