import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AppMainComponent} from "../components/main/main.component";
import {AboutComponent} from "./pages/about/about.component";
import {ContactsComponent} from "./pages/contacts/contacts.component";
import {SearchComponent} from "./pages/search/search.component";

const routes: Routes =[
  {path: 'movies', component: AppMainComponent,
  children: [{path: ':id', component:AppMainComponent}]},
  {path: 'search', component: SearchComponent,
  children:[{path: ':id', component: SearchComponent}]},
  {path: 'about', component: AboutComponent},
  {path: 'contacts', component: ContactsComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

 export class AppRoutingModule{

}
