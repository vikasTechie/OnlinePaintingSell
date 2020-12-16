import { __decorate } from "tslib";
import { Component } from '@angular/core';
let ProductList = class ProductList {
    constructor(data) {
        this.data = data;
        this.products = [];
    }
    ngOnInit() {
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
};
ProductList = __decorate([
    Component({
        selector: "product-list",
        templateUrl: "productList.component.html",
        styleUrls: ["productList.component.css"]
    })
], ProductList);
export { ProductList };
//# sourceMappingURL=productList.component.js.map