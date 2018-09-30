import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  searching = false;

  constructor() { }

  ngOnInit() {}

  filterMovies(search: string): void {
    console.log(search);
  }

}
