import {Component, OnInit} from '@angular/core';
import {ProductListService} from '../../../default/services/product-list.service';
import {Product} from '../../modals/product';
import {NzNotificationService} from 'ng-zorro-antd';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartProduct = [];
  allProduct = JSON.parse(localStorage.getItem('product-list'));
  isLoading = false;

  constructor(private productListService: ProductListService, private notification: NzNotificationService, private router: Router) {
  }

  ngOnInit(): void {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
      this.allProduct.forEach(d => {
        if (d.addedToCart) {
          this.cartProduct.push(d);
        }
      });
    }, 2000);
  }

  placeOrder() {
    this.notification.create(
      'success',
      'Order placed',
      'Your order is placed successfully',
    );
  }

  removeFromCart(product: Product, index) {
    this.cartProduct.splice(index, 1);
    this.allProduct.find(d => {
      if (d.productId === product.productId) {
        d.addedToCart = false;
      }
    });
    localStorage.setItem('product-list', JSON.stringify(this.allProduct));
  }
}
