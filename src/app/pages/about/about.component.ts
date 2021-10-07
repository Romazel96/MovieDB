import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  adv = [
    '1',
    '2',
    '3',
    '4',
    '5'
  ]


    constructor() {
  }

  ngOnInit(): void {
  }

}
