import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
    customer: any;
    signupForm: any;
    constructor(private authService: AuthService, private router: Router) { }
    ngOnInit(): void {
        this.initForm()
    }
    initForm() {
        this.signupForm = new FormGroup({
            new_email: new FormControl('', [Validators.required, Validators.email]),
            new_password: new FormControl('', [Validators.required]),
            new_phone: new FormControl('', [Validators.required]),
            name: new FormControl('', [Validators.required]),
        })
    }

    onSubmitSignup() {
        this.signupForm.setValue(this.signupForm.value);
        this.customer = this.signupForm.value
        console.warn(this.signupForm.value);
        this.authService.signup(this.customer).subscribe((response) => {
            console.log(response.data);
            () => {
              this.router.navigate(['/address']);
            }
          })
    }
}
