import { __decorate } from "tslib";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { Order, OrderItem } from "./order";
let DataService = class DataService {
    constructor(http) {
        this.http = http;
        this.products = [];
        this.order = new Order;
        this.token = "";
    }
    get loginRequired() {
        return this.token.length == 0 || this.tokenExpiration > new Date();
    }
    loadProducts() {
        return this.http.get("/api/products")
            .pipe(map((x) => {
            this.products = x;
            return true;
        }));
    }
    login(creds) {
        return this.http.post("/account/createtoken", creds).pipe(map((data) => {
            this.token = data.token;
            this.tokenExpiration = data.expiration;
            return true;
        }));
    }
    addToOrder(newProduct) {
        var item = this.order.items.find(x => x.productId == newProduct.id);
        if (item) {
            item.quantity++;
        }
        else {
            item = new OrderItem();
            item.productId = newProduct.id;
            item.productArtist = newProduct.artist;
            item.productArtId = newProduct.artId;
            item.productTitle = newProduct.title;
            item.unitPrice = newProduct.price;
            item.quantity = 1;
            item.productArtDescription = newProduct.artDescription;
            this.order.items.push(item);
        }
    }
};
DataService = __decorate([
    Injectable()
], DataService);
export { DataService };
//# sourceMappingURL=dataService.js.map