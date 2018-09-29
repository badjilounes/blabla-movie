import {AfterViewInit, ChangeDetectorRef, Component, EventEmitter, Output} from '@angular/core';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/internal/operators';
import {FormControl} from '@angular/forms';
import {Observable, Subject} from 'rxjs/index';
import {MovieService} from '../../service/movie/movie.service';
import {Movie} from '../../model/movie.model';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements AfterViewInit {

  @Output() selectedMovie: EventEmitter<Movie> = new EventEmitter<Movie>();

  movieCtrl = new FormControl();
  filteredMovies: Observable<Movie[]>;
  rebound: Subject<string> = new Subject<string>();

  constructor(private movieSrv: MovieService, private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.rebound.pipe(debounceTime(225), distinctUntilChanged())
      .subscribe(search => {
        this.filteredMovies = this.movieSrv.searchMovie({s: search}).pipe(map(e => e.Search));
        this.cdr.markForCheck();
      });

    this.movieCtrl.valueChanges.subscribe(search => this.rebound.next(search));
  }
}


