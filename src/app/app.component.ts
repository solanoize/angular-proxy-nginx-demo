import { Component, OnInit } from '@angular/core';
import { ProductService } from './services/product.service';
import { IProduct } from './interfaces/i-product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  products: IProduct[] = [];
  product!: IProduct;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.onAllProduct();
  }

  onAllProduct() {
    this.productService.all().subscribe((resp: IProduct[]) => {
      this.products = resp;
    });
  }
}
