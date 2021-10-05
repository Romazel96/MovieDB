import {Component, Input, OnInit} from '@angular/core';
import {TAppNavigation} from "./navigation.interface";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class AppNavigationComponent implements OnInit {
  @Input() navigation?: TAppNavigation

  constructor() { }

  ngOnInit(): void {
  }

}
