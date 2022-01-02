import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebAudioAPIService } from 'src/app/services/web-audio-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  started = false;

  constructor(private router: Router, private webAudioAPI: WebAudioAPIService) { }

  ngOnInit(): void 
  {
  }

  start()
  {
    this.started = true;
    this.router.navigateByUrl('/keyboard');
  }
}
