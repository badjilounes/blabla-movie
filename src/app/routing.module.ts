import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {HomeComponent} from './pages/home/home.component';
import {MoviesComponent} from './pages/movies/movies.component';
import {MovieDetailComponent} from './pages/movie-detail/movie-detail.component';

const routes: Routes = [
  { path: '',   component: HomeComponent },
  { path: 'movies',   component: MoviesComponent },
  { path: 'movie/:id',   component: MovieDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
