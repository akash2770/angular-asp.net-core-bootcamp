import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public api_url = "https://localhost:44352/api/product/list";

  private model:Product = new Product;

  constructor(private productService:ProductService) { 
    this.productService.get_product(this.api_url).subscribe(
      data => {
        console.log(data);
      }
    );
  }

  ngOnInit() {
  }

  

}
