import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AppMainComponent} from "../components/main/main.component";
import {AboutComponent} from "./pages/about/about.component";
import {ContactsComponent} from "./pages/contacts/contacts.component";
import {SearchComponent} from "./pages/search/search.component";
import {DetailComponent} from "../components/main/detail/detail.component";
import {NotfoundpageComponent} from "./pages/notfoundpage/notfoundpage.component";

const routes: Routes = [
  {
    path: 'movies', component: AppMainComponent, children: [
      {path: ':id', component: DetailComponent}
    ]
  },
  {
    path: 'search', component: SearchComponent, children: [
      {path: ':id', component: DetailComponent}
    ]
  },
  {path: 'about', component: AboutComponent},
  {path: 'contacts', component: ContactsComponent},
  {path:'', redirectTo: '/movies', pathMatch: 'full'},
  {path: '**', component: NotfoundpageComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
