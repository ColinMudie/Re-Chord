import { TestBed } from '@angular/core/testing';

import { MidiNoteConverterService } from './midi-note-converter.service';

describe('MidiNoteConverterService', () => {
  let service: MidiNoteConverterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MidiNoteConverterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
