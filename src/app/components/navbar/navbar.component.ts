import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public auth0: AuthService, @Inject(DOCUMENT) public document: Document, private router: Router) 
  {

  }

  ngOnInit(): void 
  {

  }

  home()
  {
    this.router.navigateByUrl("/");
  }

}
