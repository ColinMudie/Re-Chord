import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { interval, Subscription, switchMap, takeWhile, timer } from 'rxjs';
import { WebAudioAPIService } from 'src/app/services/web-audio-api.service';

@Component({
  selector: 'app-midi-error',
  templateUrl: './midi-error.component.html',
  styleUrls: ['./midi-error.component.css']
})
export class MidiErrorComponent implements OnInit, OnDestroy {
  hasMidi:any = true;

  constructor(public webAudioAPI: WebAudioAPIService) 
  {
  }

  ngOnInit(): void
  {
    
  }


  ngOnDestroy(): void
  {

  }

}
