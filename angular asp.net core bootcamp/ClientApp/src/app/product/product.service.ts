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

}
