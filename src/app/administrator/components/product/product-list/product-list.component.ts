import {Component, OnInit} from '@angular/core';
import {Product} from '../../../../customers/modals/product';
import {ProductListService} from '../../../../services/product-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  listOfData: Product[] = [];
  isLoading = false;

  constructor(private productListService: ProductListService) {
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
      });
    }, 2000);
  }

  deleteProduct(data, index) {
    this.listOfData.splice(index, 1);
    localStorage.setItem('product-list', JSON.stringify(this.listOfData));
  }
}
