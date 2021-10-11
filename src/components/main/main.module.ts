import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMainComponent } from './main.component';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    AppMainComponent
  ],
  exports: [
    AppMainComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class AppMainModule { }
