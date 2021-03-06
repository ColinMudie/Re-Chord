import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebAudioAPIService } from 'src/app/services/web-audio-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  started = false;

  constructor(private router: Router, public webAudioAPI: WebAudioAPIService) { }

  ngOnInit(): void 
  {
  }

  start()
  {
    this.started = true;
    this.webAudioAPI.initMidi.subscribe(
      (response) => {
        if (response)
        {
          this.router.navigateByUrl('/keyboard');
        }
        else
        {
          
        }
    })
    
  }
}
