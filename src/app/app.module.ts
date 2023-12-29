import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import {  GoogleSigninButtonModule } from '@abacritt/angularx-social-login';
import { SocialLoginModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import {
  GoogleLoginProvider
} from '@abacritt/angularx-social-login';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import { RouterModule, Routes } from '@angular/router';
import { ChaptersComponent } from './components/chapters/chapters.component';
import { Chapter1Component } from './components/chapter1/chapter1.component';
import { Chapter2Component } from './components/chapter2/chapter2.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'chapters', component: ChaptersComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChaptersComponent,
    Chapter1Component,
    Chapter2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SocialLoginModule,
    GoogleSigninButtonModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatIconModule,
    RouterModule.forRoot(routes)
    
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '226912647358-iua3tkeadrnjrrfa1tppg9snfagng66o.apps.googleusercontent.com'
            )
          },
          
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
