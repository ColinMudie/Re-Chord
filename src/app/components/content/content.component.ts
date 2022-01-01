import { Component, OnInit, Inject } from '@angular/core';
import { inputById, MIDI_INPUT, MIDI_MESSAGES, MIDI_OUTPUT, outputByName } from '@ng-web-apis/midi';
import { Observable } from 'rxjs';
import { WebAudioAPIService } from 'src/app/services/web-audio-api.service';
import MIDIMessageEvent = WebMidi.MIDIMessageEvent;
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit
{

  constructor(@Inject(MIDI_MESSAGES) messages$: Observable<MIDIMessageEvent>, webAudioAPI: WebAudioAPIService)
  {
    webAudioAPI.initAudio();
  }

  ngOnInit(): void
  {
  }

}
