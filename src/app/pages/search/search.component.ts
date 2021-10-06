import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

    inputValue = ''

  constructor() {
  }

  ngOnInit(): void {

  }

  onInput(event: any) {
    this.inputValue = event.target.value
  }
}
