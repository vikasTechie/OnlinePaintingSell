import { sum, map } from "lodash";


export class Order {
    orderID: number;
    orderDate: Date = new Date();
    orderNumber: string;
    items: Array<OrderItem> = new Array<OrderItem>();
    get subtotal(): number {
        var sum=0; 
        for (var i of this.items) {
              
            sum += i.unitPrice * i.quantity;
           
        }
       
        return sum;
       
    };
    
}

export class OrderItem {
    id: number;
    quantity: number;
    unitPrice: number;
    productId: number;
    productPrice: number;
    productTitle: string;
    productArtDescription: string;
    productArtDating: string;
    productArtId: string;
    productArtist: string;
}