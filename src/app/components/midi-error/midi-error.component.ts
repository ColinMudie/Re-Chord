import { Component, OnInit } from '@angular/core';
import { WebAudioAPIService } from 'src/app/services/web-audio-api.service';

@Component({
  selector: 'app-midi-error',
  templateUrl: './midi-error.component.html',
  styleUrls: ['./midi-error.component.css']
})
export class MidiErrorComponent implements OnInit {
  hasMidi:any = true;

  constructor(public webAudioAPI: WebAudioAPIService) 
  {
    
  }

  ngOnInit(): void 
  {
    
  }

}
