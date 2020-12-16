import { __decorate } from "tslib";
import { Component } from "@angular/core";
let cart = class cart {
    constructor(data, router) {
        this.data = data;
        this.router = router;
    }
    onCheckout() {
        if (this.data.loginRequired) {
            this.router.navigate(["login"]);
        }
        else {
            this.router.navigate(["checkout"]);
        }
    }
};
cart = __decorate([
    Component({
        selector: "the-cart",
        templateUrl: "cart.component.html",
        styleUrls: []
    })
], cart);
export { cart };
//# sourceMappingURL=cart.component.js.map