import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from './product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private product: Product = new Product();

  constructor(private productService: ProductService, private route: Router) { }

  ngOnInit() {
  }

  addProduct() {
    this.productService.add_product(this.product).subscribe(res => {
      this.route.navigate(['product']);
    });
  }


}
