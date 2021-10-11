import {Component, HostListener, OnInit, ViewEncapsulation} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {IMovieDbList, IMovieDbListItem} from "../../api/moviedb.interface";
import {AppRoutes} from "../../router/routes";
import {Router} from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SearchComponent implements OnInit {

  data?: IMovieDbList;
  dataDetail?: IMovieDbListItem

  private MOVIEDB_API_KEY = 'e5cff0382865b2c20082717f56f4269e';
  private _moviesList = `${environment.api.MOVIEDB}/3/search/movie?api_key=`;
  inputValue = ''

  private MOVIEDB_API_KEY_DETAIL = '?api_key=e5cff0382865b2c20082717f56f4269e';
  private _moviesDetail = `${environment.api.MOVIEDB}/3/movie/`;

  constructor(private http: HttpClient,
              private _router: Router,) {
  }

  ngOnInit(): void {

  }

  onInput(event: any) {

    this.inputValue = event.target.value

    this.http.get<IMovieDbList>(this._moviesList + this.MOVIEDB_API_KEY + '&query=' + this.inputValue + '&&language=ru-RU')
      .subscribe(responce => {
        this.data = responce;
        console.log(responce)
      })


  }


    @HostListener('document: keydown.escape')
  onClose(): void {
    this._router.navigate([AppRoutes.search]);
  }

  getDetail(id: number): void {
    this._router.navigate([AppRoutes.search, id]);
    this.http.get<IMovieDbListItem>(this._moviesDetail + id + this.MOVIEDB_API_KEY_DETAIL + '&&language=ru-RU')
      .subscribe(responceDetail => {
        this.dataDetail = responceDetail
        console.log(responceDetail)
      })
  }


}
