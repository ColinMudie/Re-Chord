import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-key',
  templateUrl: './key.component.html',
  styleUrls: ['./key.component.css']
})
export class KeyComponent implements OnInit {
  @Input()
  keyType!: string;

  @Input()
  keyId: string = '0';


  constructor() { }

  ngOnInit(): void {
  }

}
