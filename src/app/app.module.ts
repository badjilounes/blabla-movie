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
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { MoviesComponent } from './pages/movies/movies.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieHeaderComponent } from './components/movie-header/movie-header.component';
import { InfiniteScrollDirective } from './directives/infinite-scroll/infinite-scroll.directive';
import { AutoFocusDirective } from './directives/auto-focus/auto-focus.directive';
import {MovieListLoaderComponent} from './components/movie-list-loader/movie-list-loader.component';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchBarComponent,
    MoviesComponent,
    MovieListComponent,
    MovieListLoaderComponent,
    MovieHeaderComponent,
    InfiniteScrollDirective,
    AutoFocusDirective,
    MovieDetailComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [ApiService, MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
