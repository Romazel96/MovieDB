import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../environments/environment';
import {IMovieDbList, IMovieDbQuery} from './api/moviedb.interface';

const MOVIEDB_API_KEY = 'e5cff0382865b2c20082717f56f4269e';

@Injectable({providedIn: 'root'})
export class AppService {
  private _moviesList = `${environment.api.MOVIEDB}/3/discover/movie`;

  private _defaultParams: IMovieDbQuery = {
    api_key: MOVIEDB_API_KEY,
  }

  constructor(private _http: HttpClient) {}

  getMovieDbList(): Observable<IMovieDbList> {
    const params = new HttpParams().appendAll({...this._defaultParams})
    return this._http.get<IMovieDbList>(this._moviesList, {params} )
  }
  }
