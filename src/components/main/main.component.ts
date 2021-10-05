import {Component, OnInit, Input, ViewEncapsulation} from '@angular/core';
import {IMovieDbList} from "../../app/api/moviedb.interface";
import {Subscription} from "rxjs";
import {AppService} from "../../app/app.service";
import {ActivatedRoute, Router} from "@angular/router";

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
  sbs?: Subscription


  constructor(
    private _appSv: AppService,
    private _router: Router,
    private _routerAct: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this._getList();
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

}
