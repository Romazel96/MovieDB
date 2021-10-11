import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppHeaderModule} from "../components/header/header.module";
import {AppFooterModule} from "../components/footer/footer.module";
import {AppNavigationComponent} from "../components/navigation/navigation.component";
import {AppMainModule} from "../components/main/main.module";
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {SearchModule} from "./pages/search/search.module";
import {AboutModule} from "./pages/about/about.module";
import {ContactsModule} from "./pages/contacts/contacts.module";
import {DetailModule} from "../components/main/detail/detail.module";


@NgModule({
  declarations: [
    AppComponent,
    AppNavigationComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppHeaderModule,
    AppFooterModule,
    AppMainModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SearchModule,
    AboutModule,
    ContactsModule,
    DetailModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
