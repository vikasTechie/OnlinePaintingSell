import { Component,OnInit } from '@angular/core'
import { DataService } from '../shared/dataService';

@Component(
        {
            selector: "product-list",
            templateUrl:"productList.component.html",
        styleUrls: ["productList.component.css"]
        }

)
export class ProductList implements OnInit {
    constructor(private data: DataService) {
        
    }
    ngOnInit(): void {
        
        this.data.loadProducts()
            .subscribe(sucess => {
                if (sucess) {
                    this.products = this.data.products;
                }
                    });
    }
    addProduct(product) {
        this.data.addToOrder(product);
    }
    public products = [];
}