import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product';

@Component({
  selector: 'app-directive-ex2',
  templateUrl: './directive-ex2.component.html',
  styleUrls: ['./directive-ex2.component.scss'],
})
export class DirectiveEx2Component implements OnInit {
  products: Product[] = [
    { MaSP: 1, TenSP: 'Sony XZ', Gia: 1000 },
    { MaSP: 2, TenSP: 'Sony XZ2', Gia: 1000 },
    { MaSP: 3, TenSP: 'HTC U Ultra', Gia: 1000 },
    { MaSP: 4, TenSP: 'HTC U12 Plus', Gia: 1000 },
    { MaSP: 5, TenSP: 'Iphone XS MAX', Gia: 1000 },
    { MaSP: 6, TenSP: 'Iphone XR', Gia: 1000 },
    { MaSP: 7, TenSP: 'Xiaomi Mi Note 3', Gia: 9900 },
    { MaSP: 8, TenSP: 'Xiaomi Mi 8', Gia: 1000 },
    { MaSP: 9, TenSP: 'Galaxy Note 9', Gia: 1000 },
    { MaSP: 10, TenSP: 'Galaxy S9 Plus', Gia: 1000 },
    { MaSP: 11, TenSP: 'Nokia X9', Gia: 1000 },
  ];

  constructor() {}

  ngOnInit(): void {}

  createProduct(maSP: string, tenSP: string, gia: string): void {
    const newProduct = new Product(+maSP, tenSP, +gia);
    const existedProduct = this.products.find(
      (item) => item.MaSP === newProduct.MaSP
    );
    if (!existedProduct) {
      this.products.push(newProduct);
    } else {
      alert('Mã sản phẩm đã tồn tại');
    }
  }

  removeProduct(maSP: number) {
    const index = this.products.findIndex((item) => item.MaSP === maSP);
    this.products.splice(index, 1);
  }
}
