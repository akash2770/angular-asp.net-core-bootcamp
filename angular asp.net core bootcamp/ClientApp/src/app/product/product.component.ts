import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from './product.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private product: Product = new Product();

  constructor(private productService: ProductService,
    private route: Router,
    private router: ActivatedRoute) { }

  private url_id: number;
  private check_add_update = false;
    

  ngOnInit() {
    this.url_id = this.router.snapshot.params['id']
    this.find();
  }

  find() {
    this.productService.view_product(this.url_id).subscribe(
      res => {
        this.product.id = res['id'];
        this.product.title = res['title'];
        this.product.qty = res['qty'];
        this.check_add_update = true;
      }
    );
  }

  productSubmit() {
    if (this.check_add_update === false) {
      this.productService.add_product(this.product).subscribe(res => {
        this.route.navigate(['product']);
      });
    } else {
      this.productService.update_product(this.product).subscribe(res => {
        this.route.navigate(['product']);
      });
    }
  }


}
