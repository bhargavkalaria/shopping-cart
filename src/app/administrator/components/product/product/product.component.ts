import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {NzNotificationService} from 'ng-zorro-antd';
import {Constant} from '../../../../utils/constant';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  productForm: FormGroup;

  constructor(private fb: FormBuilder, private notification: NzNotificationService, private router: Router) {
    this.productForm = this.fb.group({
      productName: [null, [Validators.required]],
      productPrice: [null, [Validators.required]],
      productImage: [null,
        [Validators.pattern(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/),
          Validators.required]],
      productRatings: [null, [Validators.required]],
      productDiscount: [null, [Validators.required]],
      productDescription: [null, [Validators.required]],
    });
    this.notification.config({
      nzPlacement: 'bottomRight',
      nzMaxStack: 1
    });
  }

  ngOnInit(): void {
  }

  addProduct(): void {
    const product = [];
    let initialProducts;
    product.push({
      productId: Date.now(),
      productName: this.productForm.value.productName,
      productPrice: this.productForm.value.productPrice,
      productImage: this.productForm.value.productImage,
      productRatings: this.productForm.value.productRatings,
      productDiscount: this.productForm.value.productDiscount,
      productDescription: this.productForm.value.productDescription,
      addedToCart: false
    });
    if (localStorage.getItem('product-list')) {
      initialProducts = JSON.parse(localStorage.getItem('product-list'));
      localStorage.setItem('product-list', JSON.stringify(initialProducts.concat(product)));
    } else {
      localStorage.setItem('product-list', JSON.stringify(product));
    }
    localStorage.setItem('isProductReadable', 'yes');
    this.notification.create(
      'success',
      'Product added',
      this.productForm.value.productName + ' added successfully',
    );
    this.router.navigate(['administrator', 'product-list']);
  }
}
