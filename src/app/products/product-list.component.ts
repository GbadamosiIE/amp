import { Component, OnInit } from "@angular/core";
import { NgIf, NgFor, LowerCasePipe, CurrencyPipe } from '@angular/common';
import { IProduct } from "./product";
import { ConvertToSpacesPipe } from "../shared/convert-to-spaces.pipe";
import { FormsModule } from "@angular/forms";

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    imports: [NgIf, NgFor, LowerCasePipe, CurrencyPipe, ConvertToSpacesPipe, FormsModule],
    standalone: true,
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    ngOnInit(): void {
        this.listFilter = 'cart';
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
        console.log('In setter:', value)
        this.filteredProducts = this.performFilterBy(value)
    }
    filteredProducts: IProduct[] = [];
    Products: IProduct[] = [
        {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2021",
            "description": "15 gallon capacity rolling garden cart",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "assets/images/garden_cart.jpg"
        },
        {
            "productId": 5,
            "productName": "Hammer",
            "productCode": "TBX-0048",
            "releaseDate": "May 21, 2021",
            "description": "Curved claw steel hammer",
            "price": 8.9,
            "starRating": 4.8,
            "imageUrl": "assets/images/hammer.jpg"
        }
    ];
    toggleImage(): void {
        this.showImage = !this.showImage;
    }
    performFilterBy(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.Products.filter((product: IProduct) =>
            product.productName.toLocaleLowerCase().includes(filterBy)
        )
    }
};