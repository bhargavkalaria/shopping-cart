import {Component, OnInit} from '@angular/core';
import {ProductListService} from '../../../default/services/product-list.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
  orderNumber = 0;
  allProduct = JSON.parse(localStorage.getItem('product-list'));
  isLoading = false;

  constructor(private productListService: ProductListService) {
  }

  ngOnInit(): void {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
      this.allProduct.forEach(d => {
        if (d.addedToCart) {
          this.orderNumber += 1;
        }
      });
    }, 2000);
  }
}
