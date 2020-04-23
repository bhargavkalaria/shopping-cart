import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdministratorComponent} from './administrator.component';
import {OrderListComponent} from './order-list/order-list.component';
import {ProductListComponent} from './product/product-list/product-list.component';
import {ProductComponent} from './product/product/product.component';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AdministratorRouting} from './administrator-routing';


@NgModule({
  declarations: [
    AdministratorComponent,
    OrderListComponent,
    ProductListComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    ReactiveFormsModule,
    AdministratorRouting,
    FormsModule
  ]
})
export class AdministratorModule {
}
