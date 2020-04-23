import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductListService} from '../../../services/product-list.service';
import {Product} from '../../modals/product';
import {NzNotificationService} from 'ng-zorro-antd';
import {Constant} from '../../../utils/constant';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.less']
})
export class ProductDetailsComponent implements OnInit {
  editId;
  productData: Product;
  isAddToCartLoading = false;
  allProduct = JSON.parse(localStorage.getItem('product-list'));
  isLoading = false;

  constructor(private activatedRoute: ActivatedRoute,
              private productListService: ProductListService,
              private notification: NzNotificationService,
              private router: Router) {
    this.notification.config({
      nzPlacement: 'bottomRight',
      nzMaxStack: 1
    });
  }

  ngOnInit(): void {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
      if (this.activatedRoute.snapshot.params.id) {
        this.editId = +this.activatedRoute.snapshot.params.id;
        this.allProduct.forEach(d => {
          if (d.productId === this.editId) {
            this.productData = d;
          }
        });
      }
    }, 2000);
  }

  addToCart(): void {
    this.isAddToCartLoading = true;
    this.allProduct.find(d => {
      if (d.productId === this.editId) {
        d.addedToCart = true;
      }
    });
    localStorage.setItem('product-list', JSON.stringify(this.allProduct));
    setTimeout(() => {
      this.isAddToCartLoading = false;
      this.notification.create(
        'success',
        'Product Added',
        this.productData.productName + ' added to cart successfully',
      );
      this.router.navigate(['customers', 'view-cart']);
    }, 2000);
  }
}
