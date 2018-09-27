import { Component, OnInit } from '@angular/core';
import {MovieService} from '../../service/movie/movie.service';
import {SearchInput} from '../../model/search.input';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private movieSrv: MovieService) { }

  ngOnInit() {
    let search: SearchInput = { s: 'test' };
    this.movieSrv.searchMovie(search).toPromise().then(
      val => console.log(val), error => console.log(error));
  }
}
