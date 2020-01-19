import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { CounterComponent } from "./counter/counter.component";
import { FetchDataComponent } from "./fetch-data/fetch-data.component";
import { ProductListComponent } from "./product/product-list/product-list.component";
import { ProductComponent } from "./product/product.component";

const appRoutes:Routes = [
    { path: '', component: HomeComponent},
    { path: 'counter', component: CounterComponent },
    { path: 'fetch-data', component: FetchDataComponent },
    { path: 'product', component: ProductListComponent},
    { path: 'product/add', component: ProductComponent },
    { path: 'product/add/:id', component: ProductComponent },
]

@NgModule({
    imports:[ RouterModule.forRoot(appRoutes)],
    exports: [ RouterModule ]
})

export class AppRouting {}
