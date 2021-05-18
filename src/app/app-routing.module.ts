import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './_pages/auth/login/login.component';
import { SignupComponent } from './_pages/auth/signup/signup.component';
import { InvoiceComponent } from './_pages/invoice/invoice.component';
import { PageNotFoundComponent } from './_pages/page-not-found/page-not-found.component';
import { CartComponent } from './_pages/cart/cart.component';
import { AccountComponent } from './_pages/account/account.component';
import { ProductdetailsComponent } from './_pages/product/productdetails/productdetails.component';
import { MessageComponent } from './_pages/message/message.component';
import { CategoryComponent } from './_pages/product/category/category.component';
import { PurchasingHistoryComponent } from './_pages/invoice/purchasing-history/purchasing-history.component';
import { ProductComponent } from './_pages/product/product.component';
import { CreateAddressComponent } from './_pages/account/create-address/create-address.component';
import { EditOrderComponent } from './_pages/cart/edit-order/edit-order.component';
import { EditAccountComponent } from './_pages/account/edit-account/edit-account.component';

const routes: Routes = [
  {path: "", redirectTo: '/', pathMatch: "full"},
  {path: "", component: ProductComponent},
  {path: "products/:category", component: CategoryComponent},
  {path: "products/:category/:product_id", component: ProductdetailsComponent},
  {path: "signup", component: SignupComponent},
  {path: "login", component: LoginComponent},
  {path: "account", component: AccountComponent},
  {path: "account/edit-account", component: EditAccountComponent},
  {path: "account/create-address", component: CreateAddressComponent},
  {path: "cart", component: CartComponent},
  {path: "cart/:order_id", component: EditOrderComponent},
  {path: "invoice", component: InvoiceComponent},
  {path: "invoice/history", component: PurchasingHistoryComponent},
  {path: "message", component: MessageComponent},
  {path: '**', component: PageNotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
