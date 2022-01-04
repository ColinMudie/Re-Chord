import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MidiErrorComponent } from './midi-error.component';

describe('MidiErrorComponent', () => {
  let component: MidiErrorComponent;
  let fixture: ComponentFixture<MidiErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MidiErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MidiErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
