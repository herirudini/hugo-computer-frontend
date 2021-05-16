import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddressService } from 'src/app/_services/address.service';

@Component({
  selector: 'app-create-address',
  templateUrl: './create-address.component.html',
  styleUrls: ['./create-address.component.css']
})
export class CreateAddressComponent {
  data: any;
    createAddressForm: any;
    constructor(private addressService: AddressService, private router: Router) { }
    ngOnInit(): void {
        this.initForm()
    }
    initForm() {
        this.createAddressForm = new FormGroup({
          country: new FormControl('', [Validators.required]),
          state: new FormControl('', [Validators.required]),
          city: new FormControl('', [Validators.required]),
          zip: new FormControl('', [Validators.required]),
          street: new FormControl('', [Validators.required]),
          details: new FormControl('', [Validators.required])
        })
    }  

  onSubmitCreateAddress() {
    this.createAddressForm.setValue(this.createAddressForm.value);
        this.data = this.createAddressForm.value
        console.warn(this.createAddressForm.value);
        this.addressService.createAddress(this.data).subscribe((response) => {
            console.log(response.data);
            () => {
              this.router.navigate(['/products']);
            }
          })
  }
}
