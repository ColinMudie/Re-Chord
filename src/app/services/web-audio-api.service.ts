import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Chord } from '../models/chord';
import { Minor9 } from '../models/chords/minor9';
import { Voice } from '../models/voice';
import { MidiNoteConverterService } from './midi-note-converter.service';

@Injectable({
  providedIn: 'root'
})
export class WebAudioAPIService
{
  voices: any[] = [];
  currentVoices: any[] = [];
  audioCtx!: AudioContext;
  
  currentChord: Chord = new Minor9().C;

  volumeNode: any;

  hasMidi: boolean = false;


  constructor(private midiConverter: MidiNoteConverterService) 
  {
  }

  public initAudio = new Observable((observer) =>
  {    

    //////// Setup MIDI ////////

    const getMIDIMessage = (midiMessage: any): void =>
    {
      var command = midiMessage.data[0];
      // console.log(command);
      let note = midiMessage.data[1];
      var velocity = (midiMessage.data.length > 2) ? midiMessage.data[2] : 0;
      if (this.audioCtx !== undefined)
      {
        switch (command)
        {
          case 151: // noteOn
            if (velocity > 0)
            {
              this.noteOn(note, velocity);
            } else
            {
              this.noteOff(note);
            }
            break;
          case 135: // noteOff
            this.noteOff(note);
            break;
          default:
            break;
        }
      }
    }

    const onMIDISuccees = (midiAccess: any): void =>
    {
      
      if (midiAccess.inputs.size < 1) // check if midi is accessible but no inputs found.
      {
        console.log('failed');
        this.hasMidi = false;
      } 
      else
      {
        this.hasMidi = true;
        for (var input of midiAccess.inputs.values())
        {
          input.onmidimessage = getMIDIMessage;
        }
      }

      midiAccess.onstatechange = function (e:any) // display if a midi device is connected or disconnected
      {
        console.log(e.port.name, e.port.manufacturer, e.port.state);
        if (e.port.state === 'connected')
        {
          this.hasMidi = true;
        }
        else
        {
          this.hasMidi = false;
        }
      }
      observer.next(this.hasMidi);
    }

    const onMIDIFailure = (): void =>
    {
      this.hasMidi = false;
      console.log('Could not access your MIDI devices');
    }

    navigator.requestMIDIAccess()
      .then(onMIDISuccees, onMIDIFailure);

    if (this.hasMidi)
    {
      this.audioCtx = new AudioContext({
        latencyHint: "interactive",
        sampleRate: 48100,
      });

      this.volumeNode = this.audioCtx.createGain();
      this.volumeNode.gain.value = 0.1;
      this.volumeNode.connect(this.audioCtx.destination);
      console.log(`initialize audio`);
      console.log(this.audioCtx);
    }
  })

    

    public noteOn(note: number, velocity: number)
    { 
      if (this.voices[note] == null)
      {
        this.voices[note] = new Voice(note, velocity, this.audioCtx, this.volumeNode);
        this.currentVoices.push(note);
        this.currentVoices.sort(function (a, b) { return a - b });
        let currentNote = document.getElementById(`${note}`);
        let convertedNote = this.midiConverter.midiNoteConverter(note);
        if (currentNote && this.currentChord.notes.includes(convertedNote))
        {
          currentNote.classList.add('correct');
        }
        else if (currentNote)
        {
          currentNote.classList.add('incorrect');
        }
      }
    }
  
    public noteOff(note: number)
    {
      if (this.voices[note] !== null)
      {
        this.voices[note].noteOff(this.audioCtx);
        this.voices[note] = null;
        let noteIndex = this.currentVoices.findIndex(element => element === note);
        this.currentVoices.splice(noteIndex, 1);
        let currentNote = document.getElementById(`${note}`);
        if (currentNote)
        {
          currentNote.classList.remove('correct');
          currentNote.classList.remove('incorrect');
        }
      }
    }

  
  
}
