import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AuthModule } from '@auth0/auth0-angular';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { BottomNavbarComponent } from './components/bottom-navbar/bottom-navbar.component';
import { KeyboardComponent } from './components/keyboard/keyboard.component';
import { KeyComponent } from './components/key/key.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    BottomNavbarComponent,
    KeyboardComponent,
    KeyComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'keyboard',
        component: KeyboardComponent
      },
      {
        path: '**',
        component: HomeComponent
      }
    ]),
    AuthModule.forRoot({
      domain: 'dev-x9fipz-q.us.auth0.com',
      clientId: '3JAzKg2MnGSVzCVXoqr3zV4ReFUrZc52',
      cacheLocation: 'localstorage',
      useRefreshTokens: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
