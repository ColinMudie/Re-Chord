import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { WebAudioAPIService } from 'src/app/services/web-audio-api.service';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css']
})
export class KeyboardComponent implements OnInit, OnDestroy
{

  constructor(public webAudioAPI: WebAudioAPIService)
  {
    this.webAudioAPI.initAudio();
  }
  ngOnDestroy(): void
  {
    this.webAudioAPI.closeAudio();
  }

  ngOnInit(): void
  {
    
    
  }

}
