import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/_services/product.service';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-add-cart',
  templateUrl: './add-cart.component.html',
  styleUrls: ['./add-cart.component.css']
})
export class AddCartComponent implements OnInit {
  data: any;
  addCartForm: any;

  constructor(private route: ActivatedRoute, private productService: ProductService, private router: Router) { }
  getParams!: string;
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
    this.getParams = this.route.snapshot.params['category'];

    if (this.addCartForm.valid) {
      this.productService.addToCart(this.getParams, this.addCartForm.value).subscribe((response) => {
        if (response.success) {
          this.addCartForm.setValue(this.addCartForm.value);
          this.data = this.addCartForm.value
          console.warn(this.addCartForm.value);
          this.productService.addToCart(this.getParams ,this.data,).subscribe((response) => {
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
