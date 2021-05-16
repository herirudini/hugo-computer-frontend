import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { endPointUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http: HttpClient) { }

  createAddress(data: any): Observable<any> {
    console.log('run createAddress..')
    return this.http.post(endPointUrl + `/address`, data)
  }
}
