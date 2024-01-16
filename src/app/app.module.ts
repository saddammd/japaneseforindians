import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HashLocationStrategy, LocationStrategy} from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import { Router, RouterModule, Routes, provideRouter, withHashLocation } from '@angular/router';
import { ChaptersComponent } from './components/chapters/chapters.component';
import { Chapter1Component } from './components/chapter1/chapter1.component';
import { Chapter2Component } from './components/chapter2/chapter2.component';
import { Chapter3Component } from './components/chapter3/chapter3.component';
import { Chapter4Component } from './components/chapter4/chapter4.component';
import { Chapter5Component } from './components/chapter5/chapter5.component';


const routes: Routes = [];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChaptersComponent,
    Chapter1Component,
    Chapter2Component,
    Chapter3Component,
    Chapter4Component,
    Chapter5Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatIconModule,
    RouterModule.forRoot(routes)
    
  ],
  providers: [
    provideRouter(routes, withHashLocation()),
         
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
