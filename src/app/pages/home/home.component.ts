import { Component, OnInit } from '@angular/core';
import {Movie} from '../../model/movie.model';
import {MatSnackBar, MatSnackBarRef, SimpleSnackBar} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  selectedMovie: Movie = undefined;
  snackRef: MatSnackBarRef<SimpleSnackBar> = undefined;

  constructor(private snackBar: MatSnackBar, private router: Router) { }

  ngOnInit() {}

  selectMovie(movie: Movie): void {
    this.selectedMovie = movie;
  }

  validateVote(): void {
    if (this.selectedMovie) {
      let message = 'Votre vote à bien été pris en compte !';
      let action = 'Rechercher un film';
      this.snackRef = this.snackBar.open(message, action, {duration: 3000});
      this.snackRef.onAction().subscribe(() => this.router.navigate(['movies']));
    }
  }
}
