import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/index';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  get(url: string, input?: any): Observable<any> {

    let headers: HttpHeaders =
      new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});
    let params: HttpParams = new HttpParams();

    params = params.set('apiKey', environment.apiKey);

    if (input) {
      Object.keys(input).forEach((key) => params = params.append(key, input[key]));
    }

    return this.http.get(url, {headers: headers, params: params});
  }

}
