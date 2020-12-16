export class Order {
    constructor() {
        this.orderDate = new Date();
        this.items = new Array();
    }
    get subtotal() {
        var sum = 0;
        for (var i of this.items) {
            sum += i.unitPrice * i.quantity;
        }
        return sum;
    }
    ;
}
export class OrderItem {
}
//# sourceMappingURL=order.js.map