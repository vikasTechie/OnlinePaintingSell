import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { cart } from "ClientApp/app/shop/cart.component"
import { ProductList } from "ClientApp/app/shop/productList.component";
import { DataService } from "ClientApp/app/shared/dataService";
import { RouterModule, Routes } from '@angular/router';
import { Shop } from './shop/shop.component';
import { Checkout } from './checkout/checkout.component';
import { Login } from './login/login.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
    { path: "", component: Shop },
    { path: "checkout", component: Checkout },
    { path: "login", component: Login }
];

@NgModule({
    declarations: [
        AppComponent, ProductList, cart, Shop
        , Checkout,Login

    ],


    exports: [RouterModule],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(routes,
            { useHash: true, enableTracing: false }
        ),
    HttpClientModule
    ],
    providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }







