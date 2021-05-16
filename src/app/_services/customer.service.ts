// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable, throwError } from 'rxjs';
// import { retry, catchError } from 'rxjs/operators';

// export class Customer {
//   phone: string;
//   email: string;
//   password: string;
//   name: string;
//   shippingData: object;
//   invoices: string[];
//   wishlist: string[];
//   logIp: any[];
//   logToken: string;
// }

// export class Address {
//   customer_id: string;
//   country: string;
//   state: string;
//   city: string;
//   zip: string;
//   street: string;
//   details: string;
// }
// @Injectable({
//   providedIn: 'root'
// })
// export class CustomerService {
//   endPoint = 'https://hugo-computer.herokuapp.com';

//   constructor(private httpClient: HttpClient) { }

//   httpHeader = {
//     headers: new HttpHeaders({
//       'Content-Type': 'application/json'
//     })
//   }

//   signup(customer): Observable<Customer> {
//     return this.httpClient.post<Customer>(this.endPoint + '/signup', JSON.stringify(customer))
//       .pipe(
//         retry(1),
//         catchError(this.httpError)
//       )
//   }

//   login(customer): Observable<Customer> {
//     return this.httpClient.put<Customer>(this.endPoint + '/login', JSON.stringify(customer))
//       .pipe(
//         retry(1),
//         catchError(this.httpError)
//       )
//   }

//   logout(customer): Observable<Customer> {
//     return this.httpClient.patch<Customer>(this.endPoint + '/customer', JSON.stringify(customer), this.httpHeader)
//       .pipe(
//         retry(1),
//         catchError(this.httpError)
//       )
//   }

//   customerDetails(): Observable<Customer> {
//     return this.httpClient.get<Customer>(this.endPoint + '/customer', this.httpHeader)
//       .pipe(
//         retry(1),
//         catchError(this.httpError)
//       )
//   }

//   updateData(address): Observable<Address> {
//     return this.httpClient.patch<Address>(this.endPoint + '/customer/change-address', JSON.stringify(address), this.httpHeader)
//       .pipe(
//         retry(1),
//         catchError(this.httpError)
//       )
//   }

//   updateEmailPhone(customer) {
//     return this.httpClient.patch<Customer>(this.endPoint + '/customer/change-email-phone', JSON.stringify(customer), this.httpHeader)
//       .pipe(
//         retry(1),
//         catchError(this.httpError)
//       )
//   }

//   updatePassword(customer) {
//     return this.httpClient.put<Customer>(this.endPoint + '/customer/change-password', JSON.stringify(customer), this.httpHeader)
//       .pipe(
//         retry(1),
//         catchError(this.httpError)
//       )
//   }

//   httpError(error) {
//     let msg = '';
//     if (error.error instanceof ErrorEvent) {
//       // client side error
//       msg = error.error.message;
//     } else {
//       // server side error
//       msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
//     }
//     console.log(msg);
//     return throwError(msg);
//   }
// }
