import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {AuthGuard} from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'customers',
    loadChildren: () => import('./customers/components/customers.module').then(m => m.CustomersModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'administrator',
    loadChildren: () => import('./administrator/components/administrator.module').then(m => m.AdministratorModule),
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
