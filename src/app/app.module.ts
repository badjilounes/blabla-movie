import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import {ApiService} from './service/api/api.service';
import {HttpClientModule} from '@angular/common/http';
import {MovieService} from './service/movie/movie.service';
import { HomeComponent } from './pages/home/home.component';
import {AppRoutingModule} from './routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [ApiService, MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
