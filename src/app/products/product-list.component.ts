import { Component, OnInit } from "@angular/core";
import { NgIf, NgFor, LowerCasePipe, CurrencyPipe } from '@angular/common';
import { IProduct } from "./product";
import { ConvertToSpacesPipe } from "../shared/convert-to-spaces.pipe";
import { FormsModule } from "@angular/forms";
import { StarComponent } from "../shared/star.component";
import { ProductService } from "./product.service";

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    imports: [NgIf, NgFor, LowerCasePipe, CurrencyPipe, ConvertToSpacesPipe, FormsModule, StarComponent],
    standalone: true,
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

    constructor(private productService: ProductService) {

    }
    ngOnInit(): void {
        this.listFilter = '';
        this.Products = this.productService.getProducts();
        this.filteredProducts = this.Products;
    }
    PageTitle = 'Product List';
    imageWidth = 50;
    imageMargin = 50;
    showImage = false;
    private _listFilter = '';
    get listFilter() {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this.performFilterBy(value)
    }
    filteredProducts: IProduct[] = [];
    Products: IProduct[] = [];
    toggleImage(): void {
        this.showImage = !this.showImage;
    }
    performFilterBy(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.Products.filter((product: IProduct) =>
            product.productName.toLocaleLowerCase().includes(filterBy)
        )
    }
    onRatingClicked(message: string): void {
        this.PageTitle = 'Product List: ' + message;
    }
};