import {Component, OnInit} from '@angular/core';
import {Product} from '../../../../customers/modals/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  listOfData: Product[] = [];
  isLoading = false;

  constructor() {
  }

  ngOnInit(): void {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
      this.listOfData = JSON.parse(localStorage.getItem('product-list'));
    }, 2000);

  }

  deleteProduct(data, index) {
    this.listOfData.splice(index, 1);
    localStorage.setItem('product-list', JSON.stringify(this.listOfData));
  }
}
