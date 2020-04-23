import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CustomersComponent } from './customers.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { OrderStatusComponent } from './order-status/order-status.component';
import { AuthGuard } from 'src/app/default/guards/auth.guard';
import { AuthLoadChildGuard } from 'src/app/default/guards/auth-load-child.guard';
import { AuthActivateChildGuard } from 'src/app/default/guards/auth-activate-child.guard';

const CustomersRoutes: Routes = [
  {
    path: '',
    component: CustomersComponent,
    children: [
      {
        path: '',
        redirectTo: 'product-list',
        pathMatch: 'full'
      },
      {
        path: 'product-list',
        component: ProductListComponent,
      },
      {
        path: 'product-list/:id',
        component: ProductDetailsComponent,
      },
      {
        path: 'order-status',
        component: OrderStatusComponent,
      },
      {
        path: 'view-cart',
        component: CartComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(CustomersRoutes)],
  exports: [RouterModule]
})
export class CustomersRouting {
}
