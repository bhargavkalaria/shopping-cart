import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {NzNotificationService} from 'ng-zorro-antd';
import {Constant} from '../../../../utils/constant';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductListService} from '../../../../services/product-list.service';
import {Product} from '../../../../customers/modals/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  editId;
  productForm: FormGroup;

  constructor(private fb: FormBuilder,
              private notification: NzNotificationService,
              private router: Router,
              private productListService: ProductListService,
              private activatedRoute: ActivatedRoute) {
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
    this.editId = +this.activatedRoute.snapshot.params.id;
    const list = JSON.parse(localStorage.getItem('product-list'));
    list.find(d => {
      if (d.productId === this.editId) {
        this.productForm.patchValue(d);
      }
    });
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
    if (!this.editId) {
      if (localStorage.getItem('product-list')) {
        initialProducts = JSON.parse(localStorage.getItem('product-list'));
        localStorage.setItem('product-list', JSON.stringify(initialProducts.concat(product)));
      } else {
        localStorage.setItem('product-list', JSON.stringify(product));
      }
      this.notification.create(
        'success',
        'Product added',
        this.productForm.value.productName + ' added successfully',
      );

      this.productListService.createProduct(product).then((result: Product) => {
        this.notification.create(
          'success',
          'Product added',
          this.productForm.value.productName + ' added successfully',
        );
      }).catch(error => {
        this.notification.create(
          'error',
          'Error in adding product',
          error,
        );
      });
    } else {
      const list: Product[] = JSON.parse(localStorage.getItem('product-list'));
      list.find((d, i) => {
        if (d.productId === this.editId) {
          list[i].productName = this.productForm.value.productName;
          list[i].productRatings = this.productForm.value.productRatings;
          list[i].productDescription = this.productForm.value.productDescription;
          list[i].productDiscount = this.productForm.value.productDiscount;
          list[i].productImage = this.productForm.value.productImage;
          list[i].productPrice = this.productForm.value.productPrice;
        }
      });
      localStorage.setItem('product-list', JSON.stringify(list));
      this.productListService.updateProduct(this.editId, product).then((result: Product) => {
        this.notification.create(
          'success',
          'Product updated',
          'Product updated success',
        );
      }).catch(error => {
        this.notification.create(
          'error',
          'Error in updating product',
          error,
        );
      });
    }
    this.router.navigate(['administrator', 'product-list']);
  }
}
