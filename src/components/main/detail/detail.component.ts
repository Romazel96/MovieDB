import {ChangeDetectorRef, Component, HostListener, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {IMovieDbDetail, IMovieDbListItem} from "../../../app/api/moviedb.interface";
import {AppService} from "../../../app/app.service";
import {environment} from "../../../environments/environment";
import {AppRoutes} from "../../../app/router/routes";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  dataDetail?: IMovieDbDetail
  sbs?: Subscription

  private MOVIEDB_API_KEY_DETAIL = '?api_key=e5cff0382865b2c20082717f56f4269e';
  private _moviesDetail = `${environment.api.MOVIEDB}/3/movie/`;
    private id?: string;


  constructor(
    private _appSv: AppService,
    private _router: Router,
    private http: HttpClient,
    private route: ActivatedRoute,
        private _cdr: ChangeDetectorRef,

  ) { }

  ngOnInit(): void {
    this.route.url.subscribe(dataDetail => this.id = dataDetail[0].path);
    this.getDetail()
    console.log(this.id)
  }

   @HostListener('document: keydown.escape')
  onClose(): void {
    this._router.navigate([AppRoutes.movies]);
  }

   ngOnDestroy(): void {
    this.sbs?.unsubscribe();
  }

    private getDetail(): void {
    if(!this.id) return
      // this._router.navigate([AppRoutes.movies, id]);
      this.http.get<IMovieDbListItem>(this._moviesDetail + this.id + this.MOVIEDB_API_KEY_DETAIL + '&&language=ru-RU')
        .subscribe(responceDetail => {
          this.dataDetail = responceDetail
          this._cdr.detectChanges()
          console.log(responceDetail)
        })

    }
}
