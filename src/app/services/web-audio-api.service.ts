import { Injectable } from '@angular/core';
import { Voice } from '../models/voice';

@Injectable({
  providedIn: 'root'
})
export class WebAudioAPIService
{
  voices: any[] = [];
  currentVoices: any[] = [];
  audioCtx!: AudioContext;
  

  volumeNode: any;

  constructor() 
  {
  }

  public initAudio()
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
      for (var input of midiAccess.inputs.values())
        input.onmidimessage =  getMIDIMessage;
    }

    function onMIDIFailure(): void
    {
      console.log('Could not access your MIDI devices');
    }

    

    navigator.requestMIDIAccess()
      .then(onMIDISuccees, onMIDIFailure);

  }

    

    public noteOn(note: number, velocity: number)
    { 
      
      if (this.voices[note] == null)
      {
        this.voices[note] = new Voice(note, velocity, this.audioCtx, this.volumeNode)
        this.currentVoices.push(note);
        this.currentVoices.sort(function (a, b) { return a - b })
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
      }
    }

  
  
}
