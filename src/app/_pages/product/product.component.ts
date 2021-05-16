import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/_models/product.model';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[] | undefined;

  constructor(private pServices: ProductService) { }

  ngOnInit(): void {
    this.pServices.getAllProduct().subscribe((dataProduct: any)=> {
      this.products = dataProduct;
    })
  }
}
