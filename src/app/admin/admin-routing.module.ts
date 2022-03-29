import { ListOrdersComponent } from './order/list-orders/list-orders.component';
import { NewOrderComponent } from './order/new-order/new-order.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ListOrdersComponent
  },
  {
    path: 'orders',
    component: ListOrdersComponent
  },
  {
    path: 'new-order',
    component: NewOrderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
