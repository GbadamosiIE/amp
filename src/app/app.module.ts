import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // ✅ Import this for ngModel

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';

@NgModule({
    declarations: [
        AppComponent,
        ProductListComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }