import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {IMovieDbList} from "../../api/moviedb.interface";


//'https://api.themoviedb.org/3/search/movie?api_key=e5cff0382865b2c20082717f56f4269e&query='

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SearchComponent implements OnInit {

  data?: IMovieDbList;

  private MOVIEDB_API_KEY = 'e5cff0382865b2c20082717f56f4269e';
  private _moviesList = `${environment.api.MOVIEDB}/3/search/movie?api_key=`;
  inputValue = ''


  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {

  }

  onInput(event: any) {

    this.inputValue = event.target.value

     this.http.get(this._moviesList + this.MOVIEDB_API_KEY + '&query=' + this.inputValue + '&&language=ru-RU')
      .subscribe(responce => {
        // @ts-ignore
        this.data = responce;
        console.log(responce)
      })


  }
}
