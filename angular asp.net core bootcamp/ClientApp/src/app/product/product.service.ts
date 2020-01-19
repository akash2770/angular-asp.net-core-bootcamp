import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  

  constructor(private http:HttpClient) { }

  get_product(){
    return this.http.get<Product[]>('https://localhost:44352/api/product/list');
  }

  view_product(id: number) {
    return this.http.get('https://localhost:44352/api/product/view/' + id);
  }

  add_product(product: Product) {
    return this.http.post('https://localhost:44352/api/product/add', product);
  }

  update_product(product: Product) {
    return this.http.put('https://localhost:44352/api/product/update', product);
  }

  delete_product(id: number) {
    return this.http.delete('https://localhost:44352/api/product/delete/'+id);
  }

}
