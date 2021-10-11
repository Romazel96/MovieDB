import {Component, Input, OnInit} from '@angular/core';
import {TAppNavigation, TitleRoutes} from "./navigation.interface";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class AppNavigationComponent implements OnInit {
  @Input() navigation?: TAppNavigation

  titlesRoutes: TitleRoutes[] = [
    {title:'Главная',
      route:'movies'},
    {title:'Поиск',
      route:'/search'},
    {title:'Обратная связь',
      route:'/contacts'},
    {title:'О нас',
      route:'/about'}
    ]


  constructor() { }

  ngOnInit(): void {
  }

}
