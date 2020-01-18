import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  

  constructor(private http:HttpClient) { }

  get_product(api){
    return this.http.get<Product[]>(api);
  }

}
