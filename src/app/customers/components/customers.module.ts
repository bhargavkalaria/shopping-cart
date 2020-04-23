import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomersComponent} from './customers.component';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CustomersRouting} from './customers-routing';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductDetailsComponent} from './product-details/product-details.component';
import {CartComponent} from './cart/cart.component';
import {OrderStatusComponent} from './order-status/order-status.component';
import {ProductListService} from '../../services/product-list.service';
import {BrowserModule} from '@angular/platform-browser';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { AuthLoadChildGuard } from 'src/app/guards/auth-load-child.guard';


@NgModule({
  declarations: [
    CustomersComponent,
    ProductListComponent,
    ProductDetailsComponent,
    CartComponent,
    OrderStatusComponent
  ],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    CustomersRouting,
    ReactiveFormsModule,
  ],
  providers: [
    ProductListService,
    AuthLoadChildGuard
  ]
})
export class CustomersModule {
}
