import {Component, OnInit} from '@angular/core';
import {Product} from '../../../../customers/modals/product';
import {ProductListService} from '../../../../services/product-list.service';
import {NzNotificationService} from 'ng-zorro-antd';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  listOfData: Product[] = [];
  isLoading = false;

  constructor(private productListService: ProductListService, private notification: NzNotificationService) {
    this.notification.config({
      nzPlacement: 'bottomRight',
      nzMaxStack: 1
    });
  }

  ngOnInit(): void {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
      this.listOfData = JSON.parse(localStorage.getItem('product-list'));
      this.productListService.getProductList().then((result: Product) => {
        this.isLoading = false;
        this.listOfData.push(result);
      }).catch(error => {
        this.isLoading = false;
        this.notification.create(
          'error',
          'Error in getting list',
          error,
        );
      });
    }, 2000);
  }

  deleteProduct(data, index) {
    this.listOfData.splice(index, 1);
    localStorage.setItem('product-list', JSON.stringify(this.listOfData));
    this.productListService.deleteProduct(index).then((result: Product) => {
      this.listOfData.push(result);
    }).catch(error => {
      this.isLoading = false;
      this.notification.create(
        'error',
        'Error in deleting',
        error,
      );
    });
  }
}
