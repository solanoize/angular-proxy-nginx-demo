import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../interfaces/i-product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  all(): Observable<IProduct[]> {
    let forwardedAddress = 'https://2nwhkl7s-3000.asse.devtunnels.ms';
    return this.http.get<IProduct[]>(`${forwardedAddress}/products`);
  }
}
