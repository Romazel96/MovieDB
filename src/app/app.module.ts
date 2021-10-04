import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AppHeaderModule} from "../components/header/header.module";
import {AppFooterModule } from "../components/footer/footer.module";
import {AppSearchFormModule} from "../components/search-form/search-form.module";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        AppHeaderModule,
        AppFooterModule,
        AppSearchFormModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
