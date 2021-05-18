import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from 'src/app/_models/product.model';
import { ProductService } from 'src/app/_services/product.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/';

@Component({
  selector: 'app-product',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  constructor(private route: ActivatedRoute, private pServices: ProductService) { }
  getParams!: string
  paramsSubscription!: Subscription;
  products: Product[] | undefined;

  ngOnInit(): void {
    this.getParams = this.route.snapshot.params['category'];
    // this.paramsSubscription = this.route.params
    //   .subscribe(
    //     (params: Params) => {
    //       this.getParams = params['category'];
    //     }
    //   );

    console.log("category:" + this.getParams)

    this.pServices.getCategory(this.getParams).subscribe((dataProduct: any) => {
      this.products = dataProduct;
    });
  }
}
