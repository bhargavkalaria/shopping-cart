import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductListComponent} from './product/product-list/product-list.component';
import {AdministratorComponent} from './administrator.component';
import {OrderListComponent} from './order-list/order-list.component';
import {ProductComponent} from './product/product/product.component';

const AdminRoutes: Routes = [
  {
    path: '',
    component: AdministratorComponent,
    children: [
      {
        path: '',
        redirectTo: 'order-list',
        pathMatch: 'full'
      },
      {
        path: 'order-list',
        component: OrderListComponent,
      },
      {
        path: 'product-list',
        component: ProductListComponent
      },
      {
        path: 'product',
        component: ProductComponent
      },
      {
        path: 'product/:id',
        component: ProductComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(AdminRoutes)],
  exports: [RouterModule]
})

export class AdministratorRouting {
}
