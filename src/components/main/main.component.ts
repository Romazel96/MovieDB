import {Component, OnInit, Input, ViewEncapsulation, HostListener, ViewChild, ElementRef} from '@angular/core';
import {IMovieDbDetail, IMovieDbList, IMovieDbListItem} from "../../app/api/moviedb.interface";
import {Subscription} from "rxjs";
import {AppService} from "../../app/app.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AppRoutes} from "../../app/router/routes";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppMainComponent implements OnInit {
  @Input() itemId?: number;
  @Input() imgSrc?: string;
  @Input() headerTxt?: string;
  @Input() contentTxt?: string;
  @Input() footerTxt?: string;
  data?: IMovieDbList;
  dataDetail?: IMovieDbDetail
  sbs?: Subscription


  private MOVIEDB_API_KEY_DETAIL = '?api_key=e5cff0382865b2c20082717f56f4269e';
  private _moviesDetail = `${environment.api.MOVIEDB}/3/movie/`;


  constructor(
    private _appSv: AppService,
    private _router: Router,
    private _routerAct: ActivatedRoute,
    private http: HttpClient

  ) {
  }

  ngOnInit(): void {
    this._getList();
  }

  @HostListener('document: keydown.escape')
  onClose(): void {
    this._router.navigate([AppRoutes.movies]);
  }

  ngOnDestroy(): void {
    this.sbs?.unsubscribe();
  }

  private _getList(): void {
    this.sbs = this._appSv.getMovieDbList().subscribe(res => {
      this.data = res;
      console.log(this.data)
    });
  }

  getDetail(id: number): void {
    this._router.navigate([AppRoutes.movies, id]);
    this.http.get<IMovieDbListItem>(this._moviesDetail + id + this.MOVIEDB_API_KEY_DETAIL + '&&language=ru-RU')
      .subscribe(responceDetail => {
        this.dataDetail = responceDetail
        console.log(id)
        console.log(responceDetail)
      })
  }


}
