import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/_models/product.model';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  productName: Product["name"] | undefined;
  productImage: Product["image"] | undefined;
  productStock: Product["stock"] | undefined;
  productCategory: Product["category"] | undefined;
  productPriceTag: Product["priceTag"] | undefined;
  productDescription: Product["description"] | undefined;

  constructor(private route: ActivatedRoute, private pServices: ProductService) { }
  getParams!: string

  ngOnInit(): void {
    this.getParams = this.route.snapshot.params['product_id'];
    console.log("product_id:" + this.getParams)

    this.pServices.getProductDetails(this.getParams).subscribe((dataProduct: any)=> {
      this.productName = dataProduct.name;
      this.productImage = dataProduct.image;
      this.productStock = dataProduct.stock;
      this.productCategory = dataProduct.category;
      this.productPriceTag = dataProduct.priceTag;
      this.productDescription = dataProduct.description;

    })
  }
}
