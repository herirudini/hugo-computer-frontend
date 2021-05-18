import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'
import { endPointUrl } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
endPointUrl = endPointUrl;
  constructor(private http: HttpClient) { }
  getAllProduct(): any {
    return this.http.get<any>(this.endPointUrl + '/products').pipe(
      map(res => {
        return res.data || {};
      })
    );
  }
  getCategory(params: string): any {
    return this.http.get<any>(this.endPointUrl + '/products/' + params).pipe(
      map(res => {
        return res.data || {};
      })
    );
  }
  getProductDetails(params: string): any {
    return this.http.get<any>(this.endPointUrl + '/products/:category/' + params).pipe(
      map(res => {
        return res.data || {};
      })
    );
  }
  addToCart(params: string, data: any): Observable<any> {
    console.log('run addToCart..')
    return this.http.post(endPointUrl + `/products/:category/` + params, data)
  }
}