import {AfterViewInit, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {MovieService} from '../../service/movie/movie.service';
import {ActivatedRoute} from '@angular/router';
import {DetailInput} from '../../model/detail.input';
import {Observable} from 'rxjs/index';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements AfterViewInit {

  detailInfo: any = undefined;

  constructor(private movieSrv: MovieService, private route: ActivatedRoute, private cdr: ChangeDetectorRef) { }

  ngAfterViewInit() {
    let detail: DetailInput = {i: this.route.snapshot.params.id};
    this.detailInfo = this.movieSrv.getMovieDetail(detail).toPromise().then(
      info => {
        this.detailInfo = info;
        this.cdr.markForCheck();
      }
    );
  }

}
