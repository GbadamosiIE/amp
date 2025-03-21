import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // ✅ Import this for ngModel

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';

@NgModule({
    declarations: [
        AppComponent,
        ProductListComponent,
        ConvertToSpacesPipe
    ],
    imports: [
        BrowserModule,
        FormsModule // ✅ Ensure FormsModule is imported
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }