import { TestBed, inject } from '@angular/core/testing';

import { SpotifyBackendService } from './spotify-backend.service';

describe('SpotifyBackendService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpotifyBackendService]
    });
  });

  it('should be created', inject([SpotifyBackendService], (service: SpotifyBackendService) => {
    expect(service).toBeTruthy();
  }));
});
