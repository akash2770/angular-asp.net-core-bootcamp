import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { CounterComponent } from "./counter/counter.component";
import { FetchDataComponent } from "./fetch-data/fetch-data.component";
import { ProductListComponent } from "./product/product-list/product-list.component";
import { ProductComponent } from "./product/product.component";
import { AddProductComponent } from "./product/add-product/add-product.component";

const appRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch:'full' },
    { path: 'counter', component: CounterComponent },
  { path: 'fetch-data', component: FetchDataComponent },
  {
    path: 'product', component: ProductComponent, children: [
      { path: '', redirectTo: 'list', pathMatch:'full' },
      { path: 'list', component: ProductListComponent },
      { path: 'add', component: AddProductComponent },
      { path: 'add/:id', component: AddProductComponent }
    ]
  },
    
]

@NgModule({
    imports:[ RouterModule.forRoot(appRoutes)],
    exports: [ RouterModule ]
})

export class AppRouting {}
