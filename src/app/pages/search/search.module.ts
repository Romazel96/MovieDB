import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {BrowserModule} from "@angular/platform-browser";



@NgModule({
  declarations: [
    SearchComponent
  ],
    imports: [
      BrowserModule,
        CommonModule,
        FormsModule,
      HttpClientModule
    ]
})
export class SearchModule { }
