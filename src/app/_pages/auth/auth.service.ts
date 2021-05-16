import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { endPointUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(data: any): Observable<any> {
    console.log('run login..')
    return this.http.put(endPointUrl + `/login`, data)
  }
  signup(data: any): Observable<any> {
    console.log('run login..')
    return this.http.post(endPointUrl + `/signup`, data)
  }
}
