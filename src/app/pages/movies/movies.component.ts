import {AfterViewInit, ChangeDetectorRef, Component} from '@angular/core';
import {MovieService} from '../../service/movie/movie.service';
import {SearchInput} from '../../model/search.input';
import {Observable, of} from 'rxjs/index';
import {SearchOutput} from '../../model/search.ouput';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements AfterViewInit {

  allMoviesRetrieved = false;
  movies: Observable<SearchOutput> = of({totalResults: 0, Search: [], Response: 'True'});
  searchTxt = '';
  page = 1;

  constructor(private moviesSrv: MovieService, private cdr: ChangeDetectorRef) { }

  ngAfterViewInit() {}

  filterMovies(q: string): void {
    console.log('trying to filter movies ...');
    this.searchTxt = q;
    this.page = 1;
    this.allMoviesRetrieved = false;

    if (q.length >= 3) {
      this.searchMovies();
    } else {
      this.movies =  of({totalResults: 0, Search: [], Response: 'True'});
      this.cdr.markForCheck();
    }
  }

  fetchMovies(): void {
    console.log('trying to fetch movies ...');
    this.page += 1;

    if (!this.allMoviesRetrieved) {
      this.searchMovies();
    }
  }

  searchMovies(): void {
    let search: SearchInput = {s: this.searchTxt, page: this.page};
    this.movies = this.moviesSrv.searchMovie(search);
    this.cdr.markForCheck();
  }

}
