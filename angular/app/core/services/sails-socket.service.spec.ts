import { TestBed, inject } from '@angular/core/testing';

import { SailsSocketService } from './sails-socket.service';

describe('SailsSocketService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SailsSocketService]
    });
  });

  it('should be created', inject([SailsSocketService], (service: SailsSocketService) => {
    expect(service).toBeTruthy();
  }));
});
