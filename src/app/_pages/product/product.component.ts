import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/_models/product.model';
import { ProductService } from 'src/app/_services/product.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product!: { category: string; _id: string; };
  subscribeParams: Subscription = new Subscription;
  products: Product[] | undefined;

  constructor(private pServices: ProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.pServices.getAllProduct().subscribe((dataProduct: any) => {
      this.products = dataProduct;
    });
    this.product = {
      category: this.route.snapshot.params['category'],
      _id: this.route.snapshot.params['_id']
    };
    this.subscribeParams = this.route.params.subscribe(
      (product: Params) => {
        this.product.category = product['category'];
        this.product._id = product['_id'];
      }
    )
  }
  ngOnDestroy() {
    this.subscribeParams.unsubscribe();
  }
}
