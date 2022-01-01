import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AuthModule } from '@auth0/auth0-angular';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { BottomNavbarComponent } from './components/bottom-navbar/bottom-navbar.component';
import { ContentComponent } from './components/content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    BottomNavbarComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'play',
        component: ContentComponent
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
