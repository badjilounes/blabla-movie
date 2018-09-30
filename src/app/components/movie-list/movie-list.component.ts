import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChange} from '@angular/core';
import {Movie} from '../../model/movie.model';
import {SearchOutput} from '../../model/search.ouput';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnChanges {

  @Input() movies: SearchOutput = {totalResults: 0, Search: [], Response: 'True'};
  @Input() page = 1;
  @Input() search = '';
  @Output() allMoviesRetrieved: EventEmitter<void>=  new EventEmitter<void>();

  displayedMovies: Movie[] = [];

  constructor() { }

  ngOnChanges(changes: {[key: string]: SimpleChange}) {
    for (let propName in changes) {
      if (propName === 'movies' && this.movies) {
        if (this.movies.totalResults === 0 || this.movies.Response === 'False') {
           this.displayedMovies = [];
        } if (this.displayedMovies && this.displayedMovies.length < this.movies.totalResults) {
           this.displayedMovies = this.page === 1 ?
           this.movies.Search : [...this.displayedMovies, ...this.movies.Search];
         } else {
           this.allMoviesRetrieved.emit();
         }

      }
    }
  }

}
