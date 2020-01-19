import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  private products: Product[];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.load_product();
  }

  load_product() {
    this.productService.get_product().subscribe(
      res => { this.products = res; }
    );
  }

  deleteProduct(id: number) {
    this.productService.delete_product(+id).subscribe(res => {
      this.load_product();
    });
    
  }

  

}
