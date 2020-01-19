import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  private products: Product[];

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit() {
    this.load_product();
  }

  load_product() {
    this.productService.get_product().subscribe(
      res => { this.products = res; }
    );
  }


  updateProduct(id: number) {
    this.router.navigate(['product/add/'+id]);
  }

  deleteProduct(id: number) {
    this.productService.delete_product(+id).subscribe(res => {
      this.load_product();
    });
  }

  

}
