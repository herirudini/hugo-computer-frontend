import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { HeaderComponent } from './_components/header/header.component';
import { FooterComponent } from './_components/footer/footer.component';
import { SortProductComponent } from './_pages/product/sort-product/sort-product.component';
import { RecommendProductComponent } from './_pages/product/recommend-product/recommend-product.component';
import { BannerComponent } from './_components/banner/banner.component';
import { LoginComponent } from './_pages/auth/login/login.component';
import { SignupComponent } from './_pages/auth/signup/signup.component';
import { CartComponent } from './_pages/cart/cart.component';
import { AccountComponent } from './_pages/account/account.component';
import { MessageComponent } from './_pages/message/message.component';
import { PageNotFoundComponent } from './_pages/page-not-found/page-not-found.component';
import { ProductdetailsComponent } from './_pages/product/productdetails/productdetails.component';
import { ProductComponent } from './_pages/product/product.component';
import { CategoryComponent } from './_pages/product/category/category.component';
import { AddCartComponent } from './_pages/product/add-cart/add-cart.component';
import { PurchasingHistoryComponent } from './_pages/invoice/purchasing-history/purchasing-history.component';
import { AuthComponent } from './_pages/auth/auth.component';
import { CreateAddressComponent } from './_pages/account/create-address/create-address.component';
import { EditOrderComponent } from './_pages/cart/edit-order/edit-order.component';
import { EditAccountComponent } from './_pages/account/edit-account/edit-account.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SortProductComponent,
    RecommendProductComponent,
    BannerComponent,
    LoginComponent,
    SignupComponent,
    CartComponent,
    AccountComponent,
    MessageComponent,
    PageNotFoundComponent,
    ProductdetailsComponent,
    ProductComponent,
    CategoryComponent,
    AddCartComponent,
    PurchasingHistoryComponent,
    AuthComponent,
    CreateAddressComponent,
    EditOrderComponent,
    EditAccountComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
