import { Component, OnInit, Inject } from '@angular/core';
import { WebAudioAPIService } from 'src/app/services/web-audio-api.service';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css']
})
export class KeyboardComponent implements OnInit
{

  constructor(webAudioAPI: WebAudioAPIService)
  {
    webAudioAPI.initAudio();
  }

  ngOnInit(): void
  {
  }

}
