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


@NgModule({
  declarations: [
    AppComponent,
    AppNavigationComponent
  ],
  imports: [
    BrowserModule,
    AppHeaderModule,
    AppFooterModule,
    AppMainModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
