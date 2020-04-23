import {Component, OnInit} from '@angular/core';
import {ProductListService} from '../../../default/services/product-list.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.less']
})
export class ProductListComponent implements OnInit {
  productList = [];
  isLoading = false;

  constructor(public productListService: ProductListService, private router: Router) {
  }

  ngOnInit(): void {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
      if (localStorage.getItem('product-list')) {
        this.productList = JSON.parse(localStorage.getItem('product-list'));
      }
    }, 2000);
  }
}
