import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/_models/product.model';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  products: Product[] | undefined;

  constructor(private pServices: ProductService) { }

  ngOnInit(): void {
    this.pServices.getCategory().subscribe((dataProduct: any) => {
      this.products = dataProduct;
    })
  }
}
