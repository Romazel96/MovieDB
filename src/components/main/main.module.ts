import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMainComponent } from './main.component';



@NgModule({
  declarations: [
    AppMainComponent
  ],
  exports: [
    AppMainComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AppMainModule { }
