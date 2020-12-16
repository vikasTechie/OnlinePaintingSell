import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Order, OrderItem } from "./order";
@Injectable()
export class DataService{
    constructor(private http: HttpClient) {

    }
    public products = [];
    public order: Order = new Order;
    private token: string="";
    private tokenExpiration: Date;
    public get loginRequired(): boolean {
        return this.token.length == 0 || this.tokenExpiration > new Date();
    }
    public loadProducts() {
        return this.http.get("/api/products")
            .pipe(
                map((x:any[]) => {
                    this.products = x;
                    return true;
                })
            );
       
    }
   
    public login(creds): Observable<boolean> {
       return this.http.post("/account/createtoken", creds).pipe(
            map((data: any) => {
                this.token = data.token;
                this.tokenExpiration = data.expiration;
                return true;
            }));
    }
    public addToOrder(newProduct) {
        var item: OrderItem = this.order.items.find(x => x.productId == newProduct.id);
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
}