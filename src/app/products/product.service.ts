import { Injectable } from "@angular/core";
import { IProduct } from "./product";

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    getProducts(): IProduct[] {
        return [
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
            },
            {
                "productId": 7,
                "productName": "Saw",
                "productCode": "TBX-0025",
                "releaseDate": "June 15, 2021",
                "description": "15-inch steel blade hand saw",
                "price": 14.99,
                "starRating": 4.5,
                "imageUrl": "assets/images/saw.jpg"
            },
            {
                "productId": 10,
                "productName": "Drill",
                "productCode": "TBX-0085",
                "releaseDate": "August 5, 2021",
                "description": "Cordless electric drill with 2 batteries",
                "price": 49.99,
                "starRating": 4.7,
                "imageUrl": "assets/images/drill.jpg"
            },
            {
                "productId": 12,
                "productName": "Leaf Blower",
                "productCode": "GDN-0041",
                "releaseDate": "September 12, 2021",
                "description": "Battery-powered leaf blower with adjustable speed",
                "price": 79.99,
                "starRating": 4.6,
                "imageUrl": "assets/images/leaf_blower.jpg"
            },
            {
                "productId": 15,
                "productName": "Screwdriver Set",
                "productCode": "TBX-0099",
                "releaseDate": "November 3, 2021",
                "description": "10-piece magnetic tip screwdriver set",
                "price": 18.75,
                "starRating": 4.4,
                "imageUrl": "assets/images/screwdriver_set.jpg"
            },
            {
                "productId": 18,
                "productName": "Lawn Mower",
                "productCode": "GDN-0030",
                "releaseDate": "March 29, 2022",
                "description": "Electric lawn mower with 5 height settings",
                "price": 199.99,
                "starRating": 4.3,
                "imageUrl": "assets/images/lawn_mover.jpg"
            },
            {
                "productId": 20,
                "productName": "Tape Measure",
                "productCode": "TBX-0072",
                "releaseDate": "May 10, 2022",
                "description": "25-foot retractable tape measure",
                "price": 9.99,
                "starRating": 4.8,
                "imageUrl": "assets/images/tape_measure.jpg"
            },
            {
                "productId": 25,
                "productName": "Pliers",
                "productCode": "TBX-0055",
                "releaseDate": "July 8, 2022",
                "description": "8-inch steel combination pliers",
                "price": 12.49,
                "starRating": 4.6,
                "imageUrl": "assets/images/pliers.jpg"
            },
            {
                "productId": 30,
                "productName": "Wrench Set",
                "productCode": "TBX-0100",
                "releaseDate": "October 20, 2022",
                "description": "Metric and standard wrench set, 12 pieces",
                "price": 29.99,
                "starRating": 4.7,
                "imageUrl": "assets/images/wrench_set.jpg"
            }
        ]

    }

}