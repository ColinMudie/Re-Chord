import { TestBed } from '@angular/core/testing';

import { WebAudioAPIService } from './web-audio-api.service';

describe('WebAudioAPIService', () => {
  let service: WebAudioAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebAudioAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
