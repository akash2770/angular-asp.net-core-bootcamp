import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  private product: Product = new Product();

  constructor(private productService: ProductService,
    private route: Router,
    private router: ActivatedRoute) { }

  private url_id: number;
  private check_add_update = false;


  ngOnInit() {
    this.url_id = this.router.snapshot.params['id']
    this.find_product();
  }

  find_product() {
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
    //add
    if (this.check_add_update === false) {
      this.productService.add_product(this.product).subscribe(res => {
        this.route.navigate(['product']);
      });
    }
    //update
    else {
      this.productService.update_product(this.product).subscribe(res => {
        this.route.navigate(['product']);
      });
    }
  }


}
