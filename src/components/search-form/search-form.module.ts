import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchFormComponent } from './search-form.component';



@NgModule({
    declarations: [
        SearchFormComponent
    ],
    exports: [
        SearchFormComponent
    ],
    imports: [
        CommonModule
    ]
})
export class AppSearchFormModule { }
