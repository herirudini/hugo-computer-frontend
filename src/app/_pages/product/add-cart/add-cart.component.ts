import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/_services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-cart',
  templateUrl: './add-cart.component.html',
  styleUrls: ['./add-cart.component.css']
})
export class AddCartComponent implements OnInit {
  data: any;
  addCartForm: any;
  constructor(private productService: ProductService, private router: Router) { }
  ngOnInit(): void {
    this.initForm()
  }
  initForm() {

    this.addCartForm = new FormGroup({
      quantity: new FormControl(Number, [Validators.required]),
      notes: new FormControl('', [Validators.required])
    })
  }

  onSubmitAddCart() {
    if (this.addCartForm.valid) {
      this.productService.addToCart(this.addCartForm.value).subscribe((response) => {
        if (response.success) {
          this.addCartForm.setValue(this.addCartForm.value);
          this.data = this.addCartForm.value
          console.warn(this.addCartForm.value);
          this.productService.addToCart(this.data).subscribe((response) => {
            console.log(response.data);
            () => {
              this.router.navigate(['/invoice/:invoice_id']);
            }
          })
        } else {
          console.log(response)
          alert(response.message)
        }
      })
    }
  }
}
