import { Component } from "@angular/core";
import { ProductListComponent } from "./products/product-list.component";
@Component({
  selector: 'pm-root',
  template: `
  <div><h1>{{pageTitle}}</h1>
  <pm-products></pm-products>
  </div>
  `,
  imports: [ProductListComponent]
})
export class AppComponent {
  pageTitle: string = 'ACME Product Management';
}
