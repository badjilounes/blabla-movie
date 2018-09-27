import { Injectable } from '@angular/core';
import {ApiService} from '../api/api.service';
import {DetailInput} from '../../model/detail.input';
import {Observable} from 'rxjs/index';
import {environment} from '../../../environments/environment';
import {SearchInput} from '../../model/search.input';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private api: ApiService) { }

  searchMovie(searchInput: SearchInput): Observable<any> {
    return this.api.get(`${environment.apiUrl}`, searchInput);
  }

  getMovieDetail(detailInput: DetailInput): Observable<any> {
    return this.api.get(`${environment.apiUrl}`, detailInput);
  }
}
