import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Urls} from '../utils/urls';
import {Product} from '../customers/modals/product';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {
  product;

  constructor(private httpClient: HttpClient) {
  }

  getProductList() {
    return new Promise((resolve, reject) => {
      return this.httpClient.get<Product>(Urls.product).subscribe(result => {
        resolve(result);
      }, error => {
        reject(error);
      });
    });
  }

  getProduct(productId) {
    return new Promise((resolve, reject) => {
      return this.httpClient.get<Product>(Urls.product + productId).subscribe(result => {
        resolve(result);
      }, error => {
        reject(error);
      });
    });
  }

  createProduct(productData) {
    return new Promise((resolve, reject) => {
      return this.httpClient.post<Product>(Urls.product, productData).subscribe(result => {
        resolve(result);
      }, error => {
        reject(error);
      });
    });
  }

  updateProduct(productId, productData) {
    return new Promise((resolve, reject) => {
      return this.httpClient.put<Product>(Urls.product + productId, productData).subscribe(result => {
        resolve(result);
      }, error => {
        reject(error);
      });
    });
  }

  deleteProduct(productId) {
    return new Promise((resolve, reject) => {
      return this.httpClient.delete<Product>(Urls.product + productId).subscribe(result => {
        resolve(result);
      }, error => {
        reject(error);
      });
    });
  }
}
